import { get } from "mongoose";
import { put, takeLatest, all, takeEvery } from "redux-saga/effects";
import { FETCH_PRODUCTS } from "../actions/actionTypes";

const urlGetProducts = "http://localhost:5000/api/products";

function* getProductsFromApi() {
  console.log("sagaa");

  // const response = yield fetch(urlGetProducts).then((response) => response.json());

  const response = yield fetch(urlGetProducts, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "content-Type": "application/json",
    },
    body: "",
  });

  console.log(123);

  const products = yield response.status === 200
    ? JSON.parse(response._bodyInit)
    : [];

  console.log("products", products);

  return products;

  // console.log("file json", json);

  // yield put({ type: FETCH_PRODUCTS, json: json });
}

export const Api = {
  getProductsFromApi,
  // takeEvery theo dõi một action có type tương ứng
  // console.log("fetchProducts");
  // yield takeEvery(FETCH_PRODUCTS, getMovieFromApi);
};
