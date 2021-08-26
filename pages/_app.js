import { SSRProvider } from '@react-aria/ssr';
import Head from 'next/head';
import Layout from '../components/Layout';
import '../styles/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Layout>
        <Head>
          <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
          <meta
            httpEquiv='Content-Type'
            content='text/html; charset=ISO-8859-1'
          />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  );
}

export default MyApp;
