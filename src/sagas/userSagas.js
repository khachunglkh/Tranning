import { put, call, takeLatest, select, all } from 'redux-saga/effects';
import constants from '../constants'
import * as actions from '../ducks/users'
import * as api from '../api'

function* tokenRequest(action) {
  try {
    const response = yield call(api.tokenRequest)
    if (response.result == true) {
      yield put(actions.tokenSucceeded(response.data))
    } else {
      yield put(actions.tokenFailed({}))
    }
  } catch (e) {
    yield put(actions.tokenFailed({}))
  }
}

function* loginRequest(action) {

  try {
    const response = yield call(api.loginRequest,action.payload)
    yield console.log('response',response)
    if (response.result == true) {
      yield console.log('login thanh cong')
      yield put(actions.loginSucceeded({}))
    } else {
      yield put(actions.loginFailed({}))
      yield console.log('login that bai 1')
    }
  }
  catch (e){
    yield console.log(e)
    yield put(actions.loginFailed({}))
  }
}

export default function* diarySaga() {
  yield all([
    takeLatest(constants.TOKEN_REQUEST, tokenRequest),
    takeLatest(constants.LOGIN_REQUEST, loginRequest)
  ]);
}
