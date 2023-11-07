import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { combineReducers } from 'redux';

import counterReducer from './blocks/counter/reducer'
import productsPageReducer from './blocks/Products/reducer'

import productPageSagas from './blocks/Products/saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  counterPage: counterReducer,
  productsPage : productsPageReducer
});

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(productPageSagas);
// sagaMiddleware.run(module2Sagas);

export default store;