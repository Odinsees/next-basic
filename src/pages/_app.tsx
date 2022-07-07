import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/scss/main.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
