import { all } from 'redux-saga/effects';
import userSagas from './userSagas';
import jobSagas from './jobSagas'

export default function* rootSaga() {
  yield all([
    userSagas(),
    jobSagas()
  ]);
}
