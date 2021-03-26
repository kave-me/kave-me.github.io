import { createMuiTheme } from '@material-ui/core/styles';
import { blueGrey, green, indigo, red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = {
  light: createMuiTheme({
    palette: {
      type: 'light',
      primary: {
        main: green[600],
        contrastText: blueGrey[900]
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
      type: 'dark',
      primary: {
        main: green[600],
        contrastText: blueGrey[50]
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
