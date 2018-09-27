import { createAction, handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import constants from '../constants'

export const fetchJobsAction = createAction(constants.FETCH_JOBS)
export const fetchJobsSuccessAction = createAction(constants.FETCH_JOBS_SUCCEEDED)
export const fetchJobsFailedAction = createAction(constants.FETCH_JOBS_FAILED)

const initJobsState = {
  totalPages: 0,
  jobs: [],
  isLoading: false
}

export const jobs = handleActions(
  {
    [fetchJobsAction]: (state, action) => {
      return {
        ...state,
        isLoading: true
      }
    },
    [fetchJobsSuccessAction]: (state, action) => {
      let oldJobs
      if (state.jobs) {
        oldJobs = state.jobs
      } else {
        oldJobs = []
      }
      return {
        jobs: [...oldJobs,...action.payload.jobs],
      }
    },
    [fetchJobsFailedAction]: (state, action) => {
      return {
        ...state,
        isLoading: false
      }
    }
  },
  initJobsState
)

const job = combineReducers({
  jobs
})

export default job
