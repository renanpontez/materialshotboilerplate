import React from 'react';
import { Container, Grid, Box, Button, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}));

const HomeComponent = () => {
  const classes = useStyles();

  return (
    <>
      <Container>
        <Box mt={3}>
          <Grid container justify="center">
            <Paper className={classes.root}>
              <Typography variant="h5" component="h3">
                Enjoy it! :)
              </Typography>
              <Typography component="p">
                Combining Material-UI with React Slingshot we came with: <b>Material Shot Boilerplate</b>
              </Typography>

              <Box mt={5}>
                <Link>
                  <Button variant="contained" color="primary">
                    Get started    
                  </Button>
                </Link>
              </Box>
            </Paper>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default HomeComponent;