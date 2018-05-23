// import { createStore } from 'redux'
// import rootReducer from './store'

// export default function configureStore() {
//   let store = createStore(rootReducer)
//   return store
// }

/* eslint global-require: 0 */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import reducer from './store';

const middlewares = [thunk];
const enhancer = composeWithDevTools(
  {
    // Options: https://github.com/jhen0409/react-native-debugger#options
  },
)(applyMiddleware(...middlewares));

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