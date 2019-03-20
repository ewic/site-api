import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/portfolio/" component={Portfolio} />
        <Route path="/users/" component={Users} />
      </div>

    </Router>
  );
}

export default AppRouter;