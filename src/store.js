import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './redux/reducers'
import rootSagas from './redux/sagas'

export const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()

const middleware = [
  ...getDefaultMiddleware(),
  sagaMiddleware,
  routerMiddleware(history),
]
const store = configureStore({
  reducer: rootReducer(history),
  middleware,
})

sagaMiddleware.run(rootSagas)

export default store
