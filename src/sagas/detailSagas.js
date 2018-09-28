import { put, call, takeLatest, select, all } from 'redux-saga/effects';
import constants from '../constants'
import * as actions from '../ducks/details'
import * as api from '../api/indexAxios'

function * fetchDetails(action) {
  console.log('action',action)
  try{
    console.log('Hello')
    const response = yield call(api.getDetails,action.payload)
    if (response.result == true) {
      console.log('Hello 1', response)
      yield put(actions.fectchDetailsSuccessAction({
        details: response.data.job
      }))
    } else {
      yield put(actions.fetchDetailsFailedAction({}))
      yield console.log('failed 1')
    }
  } catch (error) {
    yield put(actions.fetchDetailsFailedAction({}))
     yield console.log('failed 2',error)
  }
}

export default function* diarySaga() {
  yield all([
    takeLatest(constants.FETCH_DETAILS, fetchDetails),
  ])
}
