import {
  FETCH_SUCCEEDED,
  FETCH_FAILED,
  FETCH_PRODUCTS,
  VIEW_PRODUCTS,
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

export const viewProducts = (openView) => {
  console.log("action VIEW");
  return {
    type: VIEW_PRODUCTS,
    openView: true,
  };
};
