import React from 'react';

import { AppBar, Toolbar, Typography, Paper } from '@material-ui/core';

function HomeView(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Home
          </Typography>
        </Toolbar>
      </AppBar>
      <Paper>
        CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT 
      </Paper>
    </React.Fragment>
  )
}

export default HomeView;