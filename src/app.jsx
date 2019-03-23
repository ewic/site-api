import React from 'react';
import { Route } from 'react-router-dom';

import { CssBaseline, AppBar, Toolbar, Typography, Paper } from '@material-ui/core';
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
import ContactView from './views/ContactView.jsx';

function Index(props) {
  return <HomeView classes={classes} />;
}

function Portfolio(props) {
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

function App(props) {
  const { classes } = props;

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <div id="app-root">
        <NavDrawer classes={classes} />
        <div classes={classes} className={classes.contentView}>
          <Route path="/" exact component={Index} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </div>
      </div>
    </MuiThemeProvider>
  )

};

export default withStyles(classes)(App);
