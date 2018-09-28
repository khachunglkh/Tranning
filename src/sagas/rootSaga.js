import { all } from 'redux-saga/effects';
import userSagas from './userSagas';
import jobSagas from './jobSagas';
import detailSagas from './detailSagas';

export default function* rootSaga() {
  yield all([
    userSagas(),
    jobSagas(),
    detailSagas()
  ]);
}
