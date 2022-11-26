import client from '$/apollo/client';
import { Layout } from '$/containers/Layouts';
import GlobalStyle from '$/styles/global';
import theme from '$/styles/themes';
import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Layout>
    </ThemeProvider>
  );
}
