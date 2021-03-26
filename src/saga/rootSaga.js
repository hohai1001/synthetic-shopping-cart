import { call, all } from "redux-saga/effects";
import { watchFetchProducts } from "./productSagas";

export default function* rootSaga() {
  // hàm all để chạy tuần tự các saga khác dưới dạng mảng
  yield call(watchFetchProducts);
}
