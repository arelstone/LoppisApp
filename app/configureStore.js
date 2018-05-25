/* eslint global-require: 0 */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk';
import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware';
import reducer from './store';



const logger = createLogger({});

const middlewares = [thunk, logger];

const enhancer = composeWithDevTools({})(applyMiddleware(...middlewares));

export default function configureStore(initialState) {
  const store = createStore(
    reducer, 
    initialState, 
    enhancer
  );

  if (module.hot) {
    module.hot.accept(() => {
      store.replaceReducer(require('./store/index').default);
    });
  }
  return store;
}