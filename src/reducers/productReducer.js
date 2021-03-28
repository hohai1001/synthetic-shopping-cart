import { produce } from "immer";
import {
  FETCH_PRODUCTS,
  FETCH_SUCCEEDED,
  FETCH_FAILED,
  VIEW_PRODUCTS,
} from "../actions/actionTypes";

const inital = {};
const openView = false;
const productReducer = (state = inital, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case FETCH_SUCCEEDED:
        console.log("state", state);
        draft = { root: action.receivedProducts, openView: openView };
        console.log("draft.root", draft.root);
        // break;
        return draft;
      case FETCH_FAILED:
        return [];
      case VIEW_PRODUCTS:
        return (draft = { ...state, openView: !openView });
      default:
        return state;
    }
  });

export default productReducer;

// const productReducer = (state = {}, action) => {
//   switch (action.type) {
//     case FETCH_SUCCEEDED:
//       console.log("aciton", action);
//       return { ...state, products: action.receivedProducts };
//     case FETCH_FAILED:
//       return {};
//     default:
//       return state;
//   }
// };
// export default productReducer;

// produce(state, (draft) => {
//   switch (action.type) {
//     case FETCH_SUCCEEDED:
//       console.log("state", state);
//       draft.root = action.receivedProducts;
//       console.log("draft.root", draft.root);
//       // break;
//     return draft;
//     case FETCH_FAILED:
//       return [];
//     default:
//       return state;
//   }
// });
