import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  ACTIONS,
  setProductCategoriesAction,
  setProductsAction,
} from "./actions";
import { fetchProductCategoriesApi, fetchProductsApi } from "./apis";

function* fetchProductsSagaWatcher() {
  yield takeLatest(ACTIONS.GET_PRODUCTS, fetchProductsSaga);
}

function* fetchProductsSaga({ payload = {} }) {
  const { resolve = Function.prototype, reject = Function.prototype } = payload;

  const { status, statusText, data } = yield call(fetchProductsApi, payload);

  if (statusText === "OK" || status === 200) {
    yield resolve(data);
    yield put(setProductsAction(data));
  } else {
    yield put(setProductsAction([]));
    yield reject(data);
  }
}

function* fetchProductCategoriesSagaWatcher() {
  yield takeLatest(ACTIONS.GET_PRODUCT_CATEGORIES, fetchProductCategoriesSaga);
}

function* fetchProductCategoriesSaga({ payload = {} }) {
  const { resolve = Function.prototype, reject = Function.prototype } = payload;

  const { status, statusText, data } = yield call(
    fetchProductCategoriesApi,
    payload
  );

  if (statusText === "OK" || status === 200) {
    yield resolve(data);
    yield put(setProductCategoriesAction(data));
  } else {
    yield put(setProductCategoriesAction([]));
    yield reject(data);
  }
}

export default function* rootSaga() {
  yield all([fetchProductsSagaWatcher(), fetchProductCategoriesSagaWatcher()]);
}
