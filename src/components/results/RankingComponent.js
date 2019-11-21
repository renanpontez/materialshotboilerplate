import React from 'react';
import { Container, Grid, Box, Button, Link, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ItemsList from '../_common/ItemsList';


const useStyles = makeStyles(theme => ({
  
}));

const RankingComponent = (props) => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.root}>
        <h3 className="sectionTitle">Resultados</h3>
      
        <ItemsList data={props.data} />
      </Box>
    </>
  );
}

export default RankingComponent;
