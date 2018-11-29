/* eslint global-require: 0 */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk';
import {apiMiddleware} from '@api'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from './store/rootReducer';

const persistConfig = {
	key: 'root',
	storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const logger = createLogger({});

const middlewares = [logger, thunk, apiMiddleware];

const enhancer = composeWithDevTools({})(applyMiddleware(...middlewares));

export default function configureStore(initialState) {
	const store = createStore(
		persistedReducer, 
		initialState, 
		enhancer
	);

	const persistor = persistStore(store)


	if (module.hot) {
		module.hot.accept(() => {
			store.replaceReducer(require('./store/rootReducer').default);
		});
	}

	return { store, persistor }

	
}