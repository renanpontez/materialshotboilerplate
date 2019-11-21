import React from 'react';
import { Container, Grid, Box, Button, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import EntryOrderComponent from './EntryOrderComponent';
import RankingComponent from './RankingComponent';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(2),
    margin: 0,

    '& .resultList': {
      marginBottom: 30,
    }
  }
}));

const ResultComponent = (props) => {
  const classes = useStyles();
  const [showEntry, setShowEntry] = React.useState(false);

  return (
    <>
      <Box className={classes.root}>
        {
          props.allRun &&
          <Grid container>
            <Grid item>
              <Box p={2}>
                <Button variant="outlined" color="primary" className={classes.button} onClick={() => { setShowEntry(!showEntry) }}>
                  {
                    showEntry ? "Resultados" : "Ordem de entrada"
                  }
                </Button>
              </Box>
            </Grid>
          </Grid>
        }

        {
          (props.allRun && !showEntry || !props.allRun)  && 
          <RankingComponent data={props.results.data.filter(t => t.hasRidden)} />
        }
        {
          (props.allRun && showEntry || !props.allRun) &&
          <EntryOrderComponent data={props.results.data.filter(t => !t.hasRidden)} />
        }
      </Box>
    </>
  );
}

export default ResultComponent;
