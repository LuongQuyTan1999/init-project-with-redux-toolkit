import { ConfigProvider, Empty } from 'antd'
import 'antd/dist/antd.css'
import { ConnectedRouter } from 'connected-react-router'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Routes from 'routes'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './globalStyle'
import * as serviceWorker from './serviceWorker'
import store, { history } from './store'
import theme from './theme'

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ConnectedRouter history={history}>
        <ConfigProvider renderEmpty={() => <Empty />}>
          <Routes />
        </ConfigProvider>
      </ConnectedRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
)

serviceWorker.unregister()
