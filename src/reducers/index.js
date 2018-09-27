import { combineReducers } from 'redux';
import job from '../ducks/jobs'
import user from '../ducks/users'

const appReducer = combineReducers({
  job,
  user
});

export default appReducer
