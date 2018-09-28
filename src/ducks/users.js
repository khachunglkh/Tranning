import { createAction, handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import constants from '../constants'

export const tokenRequestAction = createAction(constants.TOKEN_REQUEST)
export const tokenSucceeded = createAction(constants.TOKEN_SUCCEEDED)
export const tokenFailed = createAction(constants.TOKEN_FAILED)
export const loginRequest = createAction(constants.LOGIN_REQUEST)
export const loginSucceeded = createAction(constants.LOGIN_SUCCEEDED)
export const loginFailed = createAction(constants.LOGIN_FAILED)

const initUserState = {
  token: '',
  user: {},
  isLoading: false,
  isError: false,
  message: '',
  isLogin: false,
}

export const user = handleActions(
  {
    [tokenSucceeded] : (state, action) => {
      return {
        isLogin: false,
        isLoading: false,
        message: '',
        isError: false,
        user: {},
        token: action.payload.token
      }
    },
    [tokenFailed] : (state, action) => {
      return {
        isLogin: false,
        isError: true,
        isLoading: false,
        message: '',
        user: {},
        token: ''
      }
    },
    [loginSucceeded] : (state, action) => {
      return {
        ...state,
        isLogin: true,
      }
    },
    [loginFailed] : (state, action) => {
      return {
        ...state,
      }
    },
    [loginRequest] :(state, action) => {
      return {
        ...state,
        user,
      }
    },
  },
  initUserState
)

 export default user
