import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { withStyles } from '@material-ui/core/styles';

import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Home, PhotoLibrary, Person } from '@material-ui/icons';

const NavDrawerItems = [
  {
    text: "Home",
    icon: <Home />,
    target: '',
  },
  {
    text: "Portfolio",
    icon: <PhotoLibrary />,
    target: '#portfolio',
  },
  {
    text: "Contact",
    icon: <Person />,
    target: '#contact',
  },
]
  

function NavDrawer(props) {
  const { classes, handleNav } = props;

  return (
    <Drawer
      className={classes.drawer}
      classes={{ 
          paper: classes.drawerPaper
        }}
      variant="permanent"
      anchor="left"
    >
      <List>
        {NavDrawerItems.map(item => (
          <ListItem button key={item.text} onClick={handleNav(item.target)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}      
      </List>
    </Drawer>
  )
}

export default NavDrawer;
        // <ListItem button key="" onClick={handleNav('')}>
        //   <ListItemIcon>
        //     <Kitchen />
        //   </ListItemIcon>
        //   <ListItemText>Home</ListItemText>
        // </ListItem>