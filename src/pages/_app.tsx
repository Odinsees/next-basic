import Head from 'next/head';
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import { Footer } from 'components/common/footer/Footer';
import { Header } from 'components/common/header/Header';

import 'styles/scss/main.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ fallback: pageProps.fallback ?? {} }}>
      <Head>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <div className="layout">
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </SWRConfig>
  );
}

export default MyApp;
