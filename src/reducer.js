import { combineReducers } from "redux";
import loaderReducer from "./features/loaderSlice";
import noticeReducer from "./features/noticeSlice";
import themeReducer from "./features/themeSlice";

export default combineReducers({
  loader: loaderReducer,
  notice: noticeReducer,
  theme: themeReducer,
});
