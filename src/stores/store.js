import { createStore, applyMiddleware, combineReducers , compose} from "redux"
import { Provider } from "react-redux"
import createSagaMiddleware from 'redux-saga'
import { logger } from 'redux-logger'
import reducers from '../reducers'
import rootSaga from '../sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]
middlewares.push(logger)

export default function configureStore() {
  const store =  createStore(
    reducers,
    compose(applyMiddleware(...middlewares))
  )
  sagaMiddleware.run(rootSaga)
  return store
}
