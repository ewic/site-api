import React from 'react';
import { Link } from 'react-router-dom';

import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

/* Icons */
import { Home, PhotoLibrary, Person } from '@material-ui/icons';

const NavDrawerItems = [
  {
    text: "Home",
    icon: <Home />,
    target: '/',
  },
  {
    text: "Portfolio",
    icon: <PhotoLibrary />,
    target: '/portfolio',
  },
  {
    text: "Contact",
    icon: <Person />,
    target: '/contact',
  },
]
  

function NavDrawer(props) {
  const { classes } = props;

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
          <Link to={item.target} key={item.text}>
            <ListItem button>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          </Link>
        ))}      
      </List>
    </Drawer>
  )
}

export default NavDrawer;