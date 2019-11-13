import React, { useState } from 'react';
import PropTypes from "prop-types";
import HeaderMenu from '../menu/HeaderMenu';
import NavigationDrawer from '../menu/NavigationDrawer';
import DashboardContext from './DashboardContext';

const DashboardLayout = ({ children }) => {
  const [settings, setSettings] = useState({ drawerOpen: false });

  return (
    <DashboardContext.Provider value={{ settings, setSettings }}>
      <HeaderMenu />
      {/* <SideMenu /> */}
      <NavigationDrawer />

      <div>
        {children}
      </div>

      {/* <Footer /> */}
    </DashboardContext.Provider>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.element
}

export default DashboardLayout;
