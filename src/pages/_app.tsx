import Head from 'next/head';
import type { AppProps } from 'next/app';
import { Footer } from 'components/common/footer/Footer';
import { Header } from 'components/common/header/Header';

import 'styles/scss/main.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
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
    </>
  );
}

export default MyApp;
