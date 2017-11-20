/**
 * Created by iampamungkas on 11/20/17.
 */
import { compose, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers/reducers'

const loggerMiddleware = createLogger()

export default function configureStore() {
  return createStore(
    rootReducer,
    compose(
      applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
      )
    )
  )
}