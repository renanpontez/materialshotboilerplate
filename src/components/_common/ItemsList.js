import React from 'react';
import { Container, Grid, Box, Button, Link, Paper, ListItemIcon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),

    '& h3': {
      margin: 0,
      paddingBottom: 0
    },


  }
}));

const NoResults = () => (
  <Box p={2}>
    <Typography variant="body1">Não há resultados ainda</Typography>
  </Box>
);


const ItemsList = (props) => {
  const classes = useStyles();

  return (
    <>
      {
        props.data.length == 0 ?
        <NoResults />
        :
        <List style={{paddingBottom: 0, paddingTop: 0}}>
        {
          props.data.map((item, i) => (
            <ListItem alignItems="flex-start" key={i} style={{paddingBottom: 4, paddingTop: 4, borderBottom: '1px solid #f7f7f7'}}>
              <ListItemIcon>
                {props.entryList ?
                  <>
                    ({i + 1})
                  </>
                  :
                  <>
                    {i + 1}
                  </>
                }
              </ListItemIcon>
              <ListItemAvatar>
                <Avatar alt={item.riderForename} src={item.riderImage} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <>
                    <Grid container>
                      <Grid item xs={8}>
                        <Typography noWrap>
                          {item.riderForename}  
                        </Typography>
                      </Grid>
                      <Grid item xs={4} style={{ textAlign: 'right' }}>
                        {item.hasRidden ? 
                          <Typography variant="body2">
                            {item.statusCode == "R" ? <>{item.timePenalties}/{item.timeTaken}</> : <>{item.statusCode.toUpperCase()}</>}
                          </Typography> : null
                        }
                      </Grid>
                    </Grid>
                  </>
                }
                secondary={
                  <>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary">
                      {item.horseName}
                    </Typography>
                  </>
                }
              />
            </ListItem>
          ))
        }
      </List>
      }
      
    </>
  );
}

export default ItemsList;
