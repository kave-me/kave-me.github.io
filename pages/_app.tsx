import '../styles/globals.css';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from 'src/apolloClient';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../src/theme';
import { useEffect } from 'react';

const darkTheme = true;

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const client = useApollo();
  return (
    <ThemeProvider theme={darkTheme ? theme.dark : theme.light}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />;
      </ApolloProvider>
    </ThemeProvider>
  );
}
