import { call, put, takeEvery } from 'redux-saga/effects'
import { showError } from 'utils/exception'
import request from 'utils/request'
import { actions } from './slice'

function* loginSaga({ payload }) {
  try {
    const res = yield call(request, '/auth/login', {
      method: 'POST',
      data: payload.data,
    })
    yield put(actions.loginSuccess(res.data))
  } catch (error) {
    showError(error.data)
    yield put(actions.loginFailure(error))
  }
}

export default [takeEvery([actions.login.type], loginSaga)]
