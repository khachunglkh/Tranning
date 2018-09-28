import { createAction, handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import constants from '../constants'

export const fetchDetailsAction = createAction(constants.FETCH_DETAILS)
export const fectchDetailsSuccessAction = createAction(constants.FETCH_DETAILS_SUCCEEDED)
export const fetchDetailsFailedAction = createAction(constants.FETCH_DETAILS_FAILED)

const initDetailsState = {
  details: null,
  isLoading: false
}
 export const details = handleActions(
   {
     [fetchDetailsAction]: (state,action) => {
       return {
         ...state,
         isLoading: true
       }
     },
     [fectchDetailsSuccessAction] : (state,action) => {
       console.log('asdf',action)
       return {
         job: action.payload.details,
       }
     },
     [fetchDetailsFailedAction] : (state,action) => {
       return {
         ...state,
         isLoading: false
       }
     }
   },
   initDetailsState
 )

 const detail = combineReducers({
   details
 })
 export default detail
