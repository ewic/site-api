import React from 'react';

import { AppBar, Toolbar, Typography, Paper } from '@material-ui/core';

function PortfolioView(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Portfolio
          </Typography>
        </Toolbar>
      </AppBar>
      <Paper>
        More Content! More Content! More Content! More Content! More Content! More Content! More Content! More Content! More Content! More Content! More Content! More Content! More Content! More Content! More Content! More Content! More Content! More Content! More Content! More Content! More Content! More Content! More Content! More Content! More Content! More Content! More Content! More Content! 
      </Paper>
    </React.Fragment>
  )
}

export default PortfolioView;