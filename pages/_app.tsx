import '../styles/globals.css';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from 'src/apolloClient';
import { ThemeProvider } from '@material-ui/styles';
import { useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';
import useTheme from '../src/globalState/useTheme';

export default function App({ Component, pageProps }: AppProps) {
  // TODO fix type declaration
  const theme = useTheme((state) => state.theme) as any;

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const client = useApollo();
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}
