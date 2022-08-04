import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    
    <Layout>
      <Head>
        <title>Kaswa</title>
        
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
