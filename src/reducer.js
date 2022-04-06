import { combineReducers } from "redux";
import loaderReducer from "./features/loaderSlice";
import noticeReducer from "./features/noticeSlice";
import themeReducer from "./features/themeSlice";
import resumeReducer from "./features/resumeSlice";

export default combineReducers({
  loader: loaderReducer,
  notice: noticeReducer,
  theme: themeReducer,
  resume: resumeReducer,
});
