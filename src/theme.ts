import { createMuiTheme } from '@material-ui/core/styles';
import { blueGrey, green, indigo, red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = {
  light: createMuiTheme({
    palette: {
      primary: {
        main: green[600]
      },
      secondary: {
        main: indigo[700]
      },
      error: {
        main: red.A400
      },
      background: {
        default: blueGrey[50]
      }
    }
  }),
  dark: createMuiTheme({
    palette: {
      primary: {
        main: green[600]
      },
      secondary: {
        main: indigo[700]
      },
      error: {
        main: red.A400
      },
      background: {
        default: blueGrey[900]
      }
    }
  })
};

export default theme;
