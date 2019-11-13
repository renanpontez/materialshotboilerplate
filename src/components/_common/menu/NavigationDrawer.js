import React from 'react';
import DashboardContext from '../layouts/DashboardContext';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const NavigationDrawer = () => {
  const classes = useStyles();

  const MenuItems = ({ setSettings }) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={() => setSettings({ drawerOpen: false })}
      onKeyDown={() => setSettings({ drawerOpen: false })}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <DashboardContext.Consumer>
      {(context) => {
        return (
          <>
            <SwipeableDrawer
              open={context.settings.drawerOpen}
              onClose={() => context.setSettings({ drawerOpen: false })}
              onOpen={() => context.setSettings({ drawerOpen: true })} >
              <MenuItems setSettings={context.setSettings} />
            </SwipeableDrawer>
          </>
        )
      }}
    </DashboardContext.Consumer>
  );
}

export default NavigationDrawer;