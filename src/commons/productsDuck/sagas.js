import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  ACTIONS,
  setIsLoadingAction,
  setProductCategoriesAction,
  setProductsAction,
} from "./actions";
import { fetchProductCategoriesApi, fetchProductsApi } from "./apis";

function* fetchProductsSagaWatcher() {
  yield takeLatest(ACTIONS.GET_PRODUCTS, fetchProductsSaga);
}

function* fetchProductsSaga({ payload = {} }) {
  try {
    yield put(setIsLoadingAction(true));
    const { status, statusText, data } = yield call(fetchProductsApi, payload);
    if (statusText === "OK" || status === 200) {
      yield put(setProductsAction(data));
    } else {
      yield put(setProductsAction([]));
    }
  } catch (error) {
    yield put(setProductsAction([]));
  } finally {
    yield put(setIsLoadingAction(false));
  }
}

function* fetchProductCategoriesSagaWatcher() {
  yield takeLatest(ACTIONS.GET_PRODUCT_CATEGORIES, fetchProductCategoriesSaga);
}

function* fetchProductCategoriesSaga({ payload = {} }) {
  try {
    const { status, statusText, data } = yield call(
      fetchProductCategoriesApi,
      payload
    );

    if (statusText === "OK" || status === 200) {
      yield put(setProductCategoriesAction(data));
    } else {
      yield put(setProductCategoriesAction([]));
    }
  } catch (error) {
    yield put(setProductCategoriesAction([]));
  }
}

export default function* rootSaga() {
  yield all([fetchProductsSagaWatcher(), fetchProductCategoriesSagaWatcher()]);
}
