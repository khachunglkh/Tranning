import { put, call, takeLatest, select, all } from 'redux-saga/effects';
import constants from '../constants'
import * as actions from '../ducks/jobs'
import * as api from '../api/indexAxios'

function * fetchJobs(action) {
  try {
    const response = yield call(api.getJobs)
    if (response.result == true) {
      yield put(actions.fetchJobsSuccessAction({
        jobs: response.data.jobs
      }))
    } else {
      yield put(actions.fetchJobsFailedAction({}))
    }
  } catch (error) {
    yield put(actions.fetchJobsFailedAction({}))
  }
}

export default function* diarySaga() {
  yield all([
    takeLatest(constants.FETCH_JOBS, fetchJobs),
  ]);
}
