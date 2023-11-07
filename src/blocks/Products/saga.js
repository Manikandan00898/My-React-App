import { takeLatest, call, put } from 'redux-saga/effects';
import { fetchAllProductsData } from './remotes';
import { fetchAllProductsSuccess } from './action';

import { FETCH_ALL_PRODUCTS } from './action'

function* fetchAllProductsSagas() {
   try {
      const result = yield call(fetchAllProductsData);
      yield put(fetchAllProductsSuccess(result));
   } catch (error) {

   }
}

export default function* productPageSagas() {
   yield takeLatest(FETCH_ALL_PRODUCTS, fetchAllProductsSagas);
}
