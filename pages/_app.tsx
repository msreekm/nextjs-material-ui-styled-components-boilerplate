import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../lib/apolloClient'
import { useStore } from '../store'
import { Provider as StoreProvider } from 'mobx-react'
// import { ThemeProvider } from 'styled-components'
import { useEffect } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import {
  ThemeProvider as MaterialThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles'

import CssBaseline from '@material-ui/core/CssBaseline'

//custom theme
import theme from '../lib/theme'

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps)
  const store = useStore(pageProps.initialState)

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <StyledThemeProvider theme={theme}>
      <MaterialThemeProvider theme={theme}>
        <StoreProvider store={store}>
          <ApolloProvider client={apolloClient}>
            <CssBaseline />
            <Component {...pageProps} />
          </ApolloProvider>
        </StoreProvider>
      </MaterialThemeProvider>
    </StyledThemeProvider>
  )
}
