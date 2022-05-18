import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import store from '../store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps: { session, ...pageProps } }: any) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  )
}

export default MyApp
