import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default class NavBar extends React.Component {
  state = {
    value: 0,
  }

  handleChange = (event, value) => {
    this.setState({value});
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className="nav" id="nav">
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Home" />
            <Tab label="Portfolio" />
            <Tab label="Contact" />
          </Tabs>
        </AppBar>
      </div>
    )
  }

}