import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter as Router, withRouter } from 'react-router-dom';

import App from './app.jsx';

const AppWithRouter = withRouter(App);

ReactDOM.render(
  <Router>
    <AppWithRouter />
  </Router>,
  document.getElementById('app')
);
