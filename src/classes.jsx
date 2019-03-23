const drawerWidth = 240;

export default styles => ({
  root: {
    display: 'flex',
  },

  contentView: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    height: '100%'
  },

  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },

  content: {
    flexGrow: 1,
    padding: 3,
  },
});