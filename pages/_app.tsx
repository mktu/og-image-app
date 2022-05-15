import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import AppContextProvider from '@components/app/common/providers/AppContextProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>

  )
}

export default MyApp
