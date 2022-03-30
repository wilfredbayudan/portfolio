import { combineReducers } from "redux";
import loaderReducer from "./features/loaderSlice";
import noticeReducer from "./features/noticeSlice";

export default combineReducers({
  loader: loaderReducer,
  notice: noticeReducer,
});
