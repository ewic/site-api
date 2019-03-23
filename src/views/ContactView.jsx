import React from 'react';

import { AppBar, Toolbar, Typography, Paper } from '@material-ui/core';

function ContactView(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Contact
          </Typography>
        </Toolbar>
      </AppBar>
      <Paper>
        THE CONTACT CONTENT
      </Paper>
    </React.Fragment>
  )
}

export default ContactView;