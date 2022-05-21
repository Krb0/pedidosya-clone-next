import '../styles/globals.css'
import store from '../store'
import { SessionProvider } from 'next-auth/react'
import { Provider } from 'react-redux'
import { CookiesProvider, useCookies } from 'react-cookie'
import { useEffect } from 'react'
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client'

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:4000',
  }),
  cache: new InMemoryCache(),
})

function MyApp({ Component, pageProps: { session, ...pageProps } }: any) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <CookiesProvider>
          <ApolloProvider client={client}>
            <App Component={Component} pageProps={pageProps} />
          </ApolloProvider>
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
