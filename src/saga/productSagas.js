import {
  FETCH_FAILED,
  FETCH_SUCCEEDED,
  FETCH_PRODUCTS,
  POST_PROPDUCTS,
  POST_SUCCEEDED,
  PUT_PROPDUCTS,
  PUT_SUCCEEDED,
  DELETE_PROPDUCTS,
  DELETE_SUCCEEDED,
} from "../actions/actionTypes";

import { postSuccessProducts } from "../actions/productAction";

// put = dispatchAction
// takeLatest: lấy action mới nhất. vd: khi click nút nào đó nhiều lần thì nó chỉ lấy action mới nhất
import { put, takeLatest, takeEvery } from "redux-saga/effects";
import { Api } from "./Api";

const url = "https://60608ef404b05d0017ba2b0c.mockapi.io/api/products";

function* fetchProducts() {
  const response = yield fetch(url)
    .then((response) => response.json())
    .catch(function (err) {
      console.log("Loi get roi !!!", err);
    });
  console.log("file json", response);

  try {
    yield put({ type: "FETCH_SUCCEEDED", receivedProducts: response });
  } catch (error) {
    yield put({ type: FETCH_FAILED, error });
  }
}

function* postProducts(action) {
  console.log("action post", action);
  const post = yield fetch(url, {
    method: "POST",
    body: JSON.stringify({
      image:
        "https://m.media-amazon.com/images/I/61ypNMyv9LL._SY606._SX._UX._SY._UY_.jpg",
      title: "MOKSHA Women's High Low Maxi Dress",
      description:
        "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
      availableSizes: ["XS", "X", "L", "XXL"],
      price: 20.9,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    // .then(() => console.log("reducer post"))
    .catch(function (err) {
      console.log("Loi post roi !!!", err);
    });
  console.log("post", post);
  try {
    yield put(postSuccessProducts(post));
  } catch (error) {
    yield put({ type: FETCH_FAILED, error });
  }
}

function* putProducts() {
  const put = yield fetch(`${url}/8`, {
    method: "PUT",
    body: JSON.stringify({
      image:
        "https://i.pinimg.com/originals/e7/72/0c/e7720c2c3a866b7329af026aa571e10e.jpg",
      title: "MOKSHA Women's High Low Maxi Dress",
      description:
        "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
      availableSizes: ["XS", "X", "L", "XXL"],
      price: 20.9,
    }),

    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .catch(function () {
      console.log("loi put roi !!!");
    });
  console.log("reducer put");
  try {
    yield put({ type: "PUT_SUCCEEDED", putProducts: put });
  } catch (error) {
    yield put({ type: FETCH_FAILED, error });
  }
}

function* deleteProducts() {
  const deleteProducts = yield fetch(`${url}/8`, {
    method: "DELETE",
  });
  try {
    yield put({ type: "DELETE_SUCCEEDED", deleteProducts: deleteProducts });
  } catch (error) {
    yield put({ type: FETCH_FAILED, error });
  }
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
  yield takeLatest(POST_PROPDUCTS, postProducts);
  yield takeLatest(PUT_PROPDUCTS, putProducts);
  yield takeLatest(DELETE_PROPDUCTS, deleteProducts);
}

// export function* watchPostProducts() {
//   yield takeLatest(POST_PROPDUCTS, postProducts);
// }
