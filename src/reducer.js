import { combineReducers } from "redux";
import loaderReducer from "./features/loaderSlice";

export default combineReducers({
  loader: loaderReducer,
});
