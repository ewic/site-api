import React from 'react';

import { Route, Link } from 'react-router-dom';

import { MuiThemeProvider } from '@material-ui/core/styles';

import NavBar from './NavBar.jsx';
import theme from './Theme.jsx';

/* Controllers */
import PortfolioController from './controllers/PortfolioController.js';

function Index() {
  return <h2>Home</h2>;
}

function Portfolio() {
  let controller = new PortfolioController();
  return <h2>Portfolio</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div id="app-root">
          <NavBar />
        </div>

        <Route path="/" exact component={Index} />
        <Route path="/portfolio/" component={Portfolio} />
        <Route path="/users/" component={Users} />
      </MuiThemeProvider>
    )
  }
}
