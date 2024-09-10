import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { ACTIONS, setProductsAction } from "./actions";
import { fetchProductsApi } from "./apis";

function* fetchProductsSagaWatcher() {
  yield takeLatest(ACTIONS.GET_PRODUCTS, fetchProductsSaga);
}

function* fetchProductsSaga() {
  try {
    const response = yield call(fetchProductsApi);
    yield put(setProductsAction(response.data));
  } catch (error) {
    yield put(setProductsAction([]));
  }
}

export default function* rootSaga() {
  yield fetchProductsSagaWatcher();
}
