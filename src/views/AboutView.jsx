import React from 'react';

import { AppBar, Toolbar, Typography, Paper } from '@material-ui/core';

function AboutView(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            About
          </Typography>
        </Toolbar>
      </AppBar>
      <Paper>
        CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT 
      </Paper>
    </React.Fragment>
  )
}

export default AboutView;