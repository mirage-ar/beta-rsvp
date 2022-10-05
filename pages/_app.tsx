import '../styles/globals.css'
import type { AppProps } from 'next/app'

function Mirage({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default Mirage
