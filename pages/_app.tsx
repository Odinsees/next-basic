import type { AppProps } from 'next/app'
import Footer from '../components/moddules/footer'
import Header from '../components/moddules/header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}

export default MyApp
