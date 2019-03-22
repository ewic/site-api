import React from 'react';

import { CssBaseline, AppBar, Toolbar, Typography } from '@material-ui/core';
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';

import NavDrawer from './NavDrawer.jsx';

/* Style and theming */
import classes from './classes.jsx';
import theme from './Theme.jsx';

/* Controllers */
import PortfolioController from './controllers/PortfolioController.js';

/* Views */
import HomeView from './views/HomeView.jsx';
import PortfolioView from './views/PortfolioView.jsx';

function Index(props) {
  return <HomeView classes={classes} />;
}

function Portfolio(props) {
  const { classes } = props;

  let controller = new PortfolioController();
  return <PortfolioView controller={controller} classes={classes} />;
}

function Contact(props) {
  return <ContactView classes={classes} />
}

function renderView(view) {
  switch (view) {
    case 'portfolio':
      return Portfolio();
      break;
    case 'contact':
      return Contact();
      break;
    case '':
    default:
      return Index();
  }
}

function handleNav(view) {

  return 'Test';

}

function App(props) {
  const { classes } = props;

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <div id="app-root">
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Home
            </Typography>
          </Toolbar>
        </AppBar>
        <NavDrawer handleNav={handleNav} classes={classes} />
        
      </div>
    </MuiThemeProvider>
  )

};

export default withStyles(classes)(App);
