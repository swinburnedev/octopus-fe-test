import type { AppProps } from 'next/app'
import BasketProvider from "../contexts/basket"
import "../styles/globals.scss"

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <BasketProvider>
          <Component {...pageProps} />
      </BasketProvider>
  )
}

export default MyApp;
