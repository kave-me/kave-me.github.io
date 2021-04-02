import { createMuiTheme } from '@material-ui/core/styles';
import { blueGrey, green, indigo, red } from '@material-ui/core/colors';
import create from 'zustand';

const theme = {
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
  }),
  light: createMuiTheme({
    palette: {
      type: 'light',
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
        default: blueGrey[50]
      }
    }
  })
};

const useTheme = create((set) => ({
  theme: theme.dark,
  isDark: true,
  switchTheme: () =>
    set((state) => {
      if (state.isDark) {
        return { theme: theme.light, isDark: false };
      }
      return { theme: theme.dark, isDark: true };
    })
}));

export default useTheme;
