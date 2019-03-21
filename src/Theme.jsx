import { createMuiTheme } from '@material-ui/core/styles';

import deepOrange from '@material-ui/core/colors/deepOrange';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: deepOrange[300],
      main: deepOrange[500],
      dark: deepOrange[700],
    },
  },
});

export default theme;