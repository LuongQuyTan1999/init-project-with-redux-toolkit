import { all } from 'redux-saga/effects'
import auth from './auth/saga'

export default function* root() {
  yield all([...auth])
}
