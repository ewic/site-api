import React from 'react';

import { MuiThemeProvider } from '@material-ui/core/styles';

import NavBar from './NavBar.jsx';
import theme from './Theme.jsx';

/* Controllers */
import PortfolioController from './controllers/PortfolioController.js';

/* Views */
import PortfolioView from './views/PortfolioView.jsx';

function Index() {
  return <h2>Home</h2>;
}

function Portfolio() {
  let controller = new PortfolioController();
  return <PortfolioView />;
}

function Contact() {
  return <h2>Contact</h2>;
}

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentView: '', // Replace with loading screen?
      pathname: props.location.pathname.split('/')[1]
    }
  }

  componentDidMount() {
    this.setState({
      currentView: this.renderView(this.state.pathname)
    });
  }

  handleNav = (view) => {
    this.setState({currentView: this.renderView(view)}, () => {
      if (this.state.pathname != view)
        this.props.history.push(view);
    });
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
          <NavBar handleNav={this.handleNav} initView={this.state.pathname} />
          {view}
        </div>
      </MuiThemeProvider>
    )
  }
}
