import React from 'react';
import { Container, Grid, Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { FormattedDate } from 'react-intl';

const useStyles = makeStyles(theme => ({
  root: {
  },

  menuIcon: {
    maxWidth: '100%',
    padding: 10,
    boxSizing: 'border-box',
    paddingTop: 10,
    maxHeight: 50
  },


}));

const MenuItems = (props) => {
  const classes = useStyles();

  return (
    <ul className="menuLink">
      {
        props.items.map(item => {
          let url;
          let numberOfParams = (props.to.match(new RegExp("{p}", "g")) || []).length;

          if (numberOfParams == 1) {
            url = props.to.replace('{p}', item.id);
          } else if (numberOfParams == 2) {
            url = props.to.replace('{p}', item.eventId).replace('{p}', item.id);
          }

          return (
            <li key={item.id}>
              <Link to={url}>
                <Grid container>
                  {item.image &&
                    <Grid item xs={2}>
                        <img src={item.image} className={classes.menuIcon} />
                    </Grid>
                  }
                  <Grid item xs={item.image ? 8 : 10}>
                    <Typography
                      component="span"
                      variant="body1"
                      color="primary">
                      {item.title}
                    </Typography>
                    <br />
                    <Typography
                      component="span"
                      variant="body2">
                      {
                        item.startDate ? 
                        <FormattedDate value={item.startDate} />
                        :
                        <>
                          Início: {item.startTime.split(':')[0] + ':' + item.startTime.split(':')[1]}
                        </>
                    }
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <IconButton className={classes.backButton}>
                      <ChevronRightIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Link>
            </li>
          )
        })
      }
    </ul>
  );
}

export default MenuItems;