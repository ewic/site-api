import React from 'react';

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

function Contact() {
  return <h2>Contact</h2>;
}

export default class App extends React.Component {
  state = {
    currentView: ''
  }

  handleNav = (view) => {
    this.props.history.push(view);
    console.log(this.props.history);

    this.setState({currentView: this.renderView(view)})
  }

  renderView = (view) => {
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

  render() {
    let view = this.state.currentView;

    return (
      <MuiThemeProvider theme={theme}>
        <div id="app-root">
          <NavBar handleNav={this.handleNav}/>
          {view}           
        </div>
      </MuiThemeProvider>
    )
  }
}
