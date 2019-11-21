import React from 'react';
import { Container, Grid, Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuItems from '../_common/MenuItems';

const useStyles = makeStyles(theme => ({
  root: {
  }
}));

const HomeComponent = (props) => {
  const classes = useStyles();

  return (
    <>
      <Container style={{padding: 0}}>
        <Box>
          <h3 className="sectionTitle">Eventos</h3>

          <MenuItems to={`/events/{p}/rounds`} items={props.results.data} />
        </Box>
      </Container>
    </>
  );
}

export default HomeComponent;