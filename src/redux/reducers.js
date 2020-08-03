import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import auth from './auth/slice'

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
  })
