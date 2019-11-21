import React, { useState } from 'react';
import PropTypes from "prop-types";
import HeaderMenu from '../menu/HeaderMenu';
import NavigationDrawer from '../menu/NavigationDrawer';
import DashboardContext from './DashboardContext';
import { Container, Grid } from '@material-ui/core';

const DashboardLayout = ({ children }) => {
  const [settings, setSettings] = useState({ drawerOpen: false });

  return (
    <DashboardContext.Provider value={{ settings, setSettings }}>
      <HeaderMenu />
      {/* <SideMenu /> */}
      {/* <NavigationDrawer /> */}

      <Container style={{padding: 0, paddingTop: 50}}>
        <Grid container justify="center">
          <Grid item xs={12} md={5}>
            {children}
          </Grid>
        </Grid>
      </Container>

      {/* <Footer /> */}
    </DashboardContext.Provider>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.element
}

export default DashboardLayout;
