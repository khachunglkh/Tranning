import { createAction, handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import constants from '../constants'

export const tokenRequestAction = createAction(constants.TOKEN_REQUEST)
export const tokenSucceeded = createAction(constants.TOKEN_SUCCEEDED)
export const tokenFailed = createAction(constants.TOKEN_FAILED)

const initUserState = {
  token: '',
  user: {},
  isLoading: false,
  isError: false,
  message: ''
}

export const user = handleActions(
  {
    [tokenSucceeded] : (state, action) => {
      return {
        isLoading: false,
        message: '',
        isError: false,
        user: {},
        token: action.payload.token
      }
    },
    [tokenFailed] : (state, action) => {
      return {
        isError: true,
        isLoading: false,
        message: '',
        user: {},
        token: ''
      }
    }
  },
  initUserState
)

 export default user
