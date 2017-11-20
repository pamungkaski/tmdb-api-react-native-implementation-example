/**
 * Created by iampamungkas on 11/20/17.
 */

import { combineReducers } from 'redux'
import { NavigatorHome } from '../components/Home/navigationConf'
import {
  FILM_LIST_RESPONSE,
  FILM_LIST_REQUEST
} from '../actions/filmActions'

const film = (
  state = {
    isFetching: false,
    list: []
  }, action
) => {
  switch (action.type ) {
    case FILM_LIST_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case FILM_LIST_RESPONSE:
      return {
        ...state,
        isFetching: false,
        list: [...state.list, ...action.response]
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  film,
  Home: (state,action) => NavigatorHome.router.getStateForAction(action,state),
});

export default rootReducer