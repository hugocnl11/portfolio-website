import { ChakraProvider } from '@chakra-ui/react';
import Fonts from '../components/fonts';
import Layout from '../components/layouts/main';
import theme from '../lib/theme';
import dynamic from 'next/dynamic';
//import Head from 'next/head';

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme} suppressHydrationWarning>
      <Fonts />
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  );
};

export default dynamic(() => Promise.resolve(Website), { ssr: false });
