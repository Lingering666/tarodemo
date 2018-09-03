import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'

const middleWares = [
  thunkMiddleware,
  createLogger()
];

export default function configStore () {
  const store = createStore(rootReducer, applyMiddleware(...middleWares));
  return store;
}
