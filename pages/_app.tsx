import '../styles/globals.css'
import store from '../store'
import { SessionProvider } from 'next-auth/react'
import { Provider } from 'react-redux'
import { CookiesProvider, useCookies } from 'react-cookie'
import { useEffect } from 'react'

function MyApp({ Component, pageProps: { session, ...pageProps } }: any) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <CookiesProvider>
          <App Component={Component} pageProps={pageProps} />
        </CookiesProvider>
      </Provider>
    </SessionProvider>
  )
}

export default MyApp

const App = ({ Component, pageProps }: any) => {
  const [cookies, setCookie] = useCookies(['address'])
  useEffect(() => {
    if (cookies.address === undefined) {
      setCookie('address', '', { path: '/' })
    }
  }, [])
  return <Component {...pageProps} />
}
