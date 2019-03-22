import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { withStyles } from '@material-ui/core/styles';

import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Kitchen } from '@material-ui/icons';

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
        <ListItem button key="0">
          <ListItemIcon><Kitchen /></ListItemIcon>
        </ListItem>
      </List>
    </Drawer>
  )
}

export default NavDrawer;