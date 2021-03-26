import { combineReducers } from "redux";
import productReducer from "./productReducer";

// combineReducers gom tất cả các reducer lại
const allReducers = combineReducers({
  productReducer,
});

export default allReducers;
