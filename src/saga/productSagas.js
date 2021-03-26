import {
  FETCH_FAILED,
  FETCH_SUCCEEDED,
  FETCH_PRODUCTS,
} from "../actions/actionTypes";

// put = dispatchAction
// takeLatest: lấy action mới nhất. vd: khi click nút nào đó nhiều lần thì nó chỉ lấy action mới nhất
import { put, takeLatest, takeEvery } from "redux-saga/effects";
import { Api } from "./Api";

function* fetchProducts() {
  // chay 2
  const response = yield fetch(
    "https://5ff9781017386d0017b51dc9.mockapi.io/api/v1/ticketAll"
  ).then((response) => response.json());
  console.log("file json", response);

  try {
    yield put({ type: "FETCH_SUCCEEDED", receivedProducts: response });
  } catch (error) {
    yield put({ type: FETCH_FAILED, error });
  }

  // return response;
}

// function* fetchProducts() {
//   try {
//     const receivedProducts = getProductsFromApi();

//     console.log("sagalkjsdfhskdjhfdjk");

//     yield put({
//       type: FETCH_SUCCEEDED,
//       receivedProducts: receivedProducts,
//     });

//     console.log("saga", receivedProducts);
//   } catch (error) {
//     yield put({ type: FETCH_FAILED, error });
//   }
// }

export function* watchFetchProducts() {
  yield takeLatest(FETCH_PRODUCTS, fetchProducts);
}
