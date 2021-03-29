import { produce } from "immer";
import {
  FETCH_PRODUCTS,
  FETCH_SUCCEEDED,
  FETCH_FAILED,
  VIEW_PRODUCTS,
  POST_PROPDUCTS,
  POST_SUCCEEDED,
  PUT_SUCCEEDED,
  DELETE_PROPDUCTS,
  DELETE_SUCCEEDED,
} from "../actions/actionTypes";

const inital = {
  root: [],
  // postProd: {
  //   isPost: false,
  //   data: [],
  // },
};
const openView = false;
const productReducer = (state = inital, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case FETCH_SUCCEEDED:
        console.log("state", state);
        draft.root = action.receivedProducts;
        console.log("action", action);
        break;
      case FETCH_FAILED:
        return [];
      // case VIEW_PRODUCTS:
      //   return (draft = { ...state, openView: !openView });
      case POST_SUCCEEDED:
        // draft.root = action.postProducts;
        console.log("draft post");
        console.log("action.post", action);
        draft.root.push(action.datas);
        break;
      case PUT_SUCCEEDED:
        draft.root = action.putProducts;
        console.log("draft put");
        break;
      case DELETE_SUCCEEDED:
        draft.root = action.deleteProducts;
        console.log("draft delete");
        break;
      // case POST_PROPDUCTS:
      //   // xử lý data
      //   draft.postProd.isPost = true;
      //   break;
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
