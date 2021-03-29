import {
  FETCH_SUCCEEDED,
  FETCH_FAILED,
  FETCH_PRODUCTS,
  VIEW_PRODUCTS,
  POST_PROPDUCTS,
  POST_SUCCEEDED,
  PUT_PROPDUCTS,
  PUT_SUCCEEDED,
  DELETE_PROPDUCTS,
  DELETE_SUCCEEDED,
} from "./actionTypes";

export const fetchProductsAction = () => {
  console.log("action 1");
  return {
    type: FETCH_PRODUCTS,
  };
};

export const fetchSuccessAction = () => {
  console.log("action 2");
  return {
    type: FETCH_SUCCEEDED,
  };
};

export const fetchFailedAction = () => {
  console.log("action 3");
  return {
    type: FETCH_FAILED,
  };
};

export const openView = () => {
  console.log("action VIEW");
  return {
    type: VIEW_PRODUCTS,
  };
};

export const postProducts = (params) => {
  console.log("action post", params);
  return {
    type: POST_PROPDUCTS,
    name: params,
  };
};

export const postSuccessProducts = (datas) => {
  console.log("action SUCCEEDED", datas);
  return {
    type: POST_SUCCEEDED,
    datas,
  };
};

export const putProducts = () => {
  console.log("action put");
  return {
    type: PUT_PROPDUCTS,
  };
};

export const putSuccessProducts = () => {
  console.log("action put");
  return {
    type: PUT_SUCCEEDED,
  };
};

export const deleteProducts = () => {
  console.log("action delete");
  return {
    type: DELETE_PROPDUCTS,
  };
};

export const deleteSuccessProducts = () => {
  console.log("action delete");
  return {
    type: DELETE_SUCCEEDED,
  };
};
