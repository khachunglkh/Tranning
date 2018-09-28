import { combineReducers } from 'redux';
import job from '../ducks/jobs'
import user from '../ducks/users'
import detail from '../ducks/details'

const appReducer = combineReducers({
  job,
  user,
  detail
});

export default appReducer
