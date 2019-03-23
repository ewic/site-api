import React from 'react';
import { Link } from 'react-router-dom';

import { 
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Paper,
  Typography,
  Button,
  IconButton,
 } from '@material-ui/core';
import { Icon } from '@mdi/react';

/* Icons */
import { 
  Home,
  PhotoLibrary,
  Person,
} from '@material-ui/icons';
import {
  mdiAccount,
  mdiInstagram,
  mdiGithubCircle,
  mdiYoutube,
} from '@mdi/js'

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

const AvatarButtons = [
  {
    text: "Instagram",
    icon: <Icon path={mdiInstagram}
              size={1}
              horizontal
              vertical
              rotate={180} />,
    target: "http://instagram.com/ewicexclamationpoint",
  },
  {
    text: "Youtube",
    icon: <Icon path={mdiYoutube}
              size={1}
              horizontal
              vertical
              rotate={180} />,
    target: "https://www.youtube.com/user/TheEwic",
  },
  {
    text: "Github",
    icon: <Icon path={mdiGithubCircle}
              size={1}
              horizontal
              vertical
              rotate={180} />,
    target: "http://github.com/",
  },
]

function navigateTo(target) {
  window.open(target);
}

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
      <Paper className={classes.avatar}>
          <Typography variant="h5" className={classes.avatarTypography}>
            Eric Zhang
          </Typography>
          {AvatarButtons.map(button => (
            <IconButton key={button.text} onClick={() => navigateTo(button.target)}>
            {button.icon}
            </IconButton>
          ))}
      </Paper>
      <Divider />
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