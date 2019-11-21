import React from 'react';
import { Container, Grid, Box, Button, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuItems from '../_common/MenuItems';
import { FormattedDate } from 'react-intl';


const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 20,
    marginBottom: theme.spacing(2),
    margin: 0,

    '& .resultList': {
      marginBottom: 30,
    },
  },
  roundInfoContainer: {
    paddingBottom: 10,
    
    '& img': {
      width: '100%',
      padding: 10,
      boxSizing: 'border-box'
    }
  },
}));

const ResultComponent = (props) => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.roundInfoContainer}>
          <Grid container>
            <Grid item xs={2}>
              <img src={props.event.data.image} className={classes.eventImage} />
            </Grid>
            <Grid item xs={8}>
              <Typography variant="h6">
                {props.event.data.title}
              </Typography>
              <Typography variant="body2">
                {props.event.data.ridingCenterName}
              </Typography>
              <Typography variant="body2">
                {
                  props.event.data.startDate ? <FormattedDate value={props.event.data.startDate} weekday="long" day="numeric" month="long" year="numeric" /> : "A seguir"
                }
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <h3 className="sectionTitle">Provas</h3>

        <MenuItems to={`/events/{p}/rounds/{p}/results`} items={props.results.data} />
      </Box>
    </>
  );
}

export default ResultComponent;
