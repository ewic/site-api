import React from 'react';

import { withRouter } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default class NavBar extends React.Component {
  state = {
    value: '',
  }

  handleChange = (event, value) => {
    this.setState({value});
    this.props.handleNav(value);
  }

  render() {

    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className="nav" id="nav">
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Home" value="" />
            <Tab label="Portfolio" value="portfolio" />
            <Tab label="Contact" value="contact" />
          </Tabs>
        </AppBar>
      </div>
    )
  }

}