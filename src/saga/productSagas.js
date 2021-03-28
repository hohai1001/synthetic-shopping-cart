import {
  FETCH_FAILED,
  FETCH_SUCCEEDED,
  FETCH_PRODUCTS,
} from "../actions/actionTypes";

// put = dispatchAction
// takeLatest: lấy action mới nhất. vd: khi click nút nào đó nhiều lần thì nó chỉ lấy action mới nhất
import { put, takeLatest, takeEvery } from "redux-saga/effects";
import { Api } from "./Api";

const url = "https://60608ef404b05d0017ba2b0c.mockapi.io/api/products";

function* fetchProducts() {
  // chay 2
  const response = yield fetch(url)
    .then((response) => response.json())
    .catch(function (err) {
      console.log("Loi roi !!!", err);
    });
  console.log("file json", response);

  // const response = yield fetch(url, {
  //   method: 'POST',
  // body: JSON.stringify({
  //   title: 'foo',
  //   body: 'bar',
  //   userId: 1,
  // }),
  // headers: {
  //   'Content-type': 'application/json; charset=UTF-8',
  // },
  // });

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
