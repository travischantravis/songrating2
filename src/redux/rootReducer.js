import { combineReducers } from "redux";
import songReducer from "./song/songReducer";

const rootReducer = combineReducers({
  song: songReducer,
});

export default rootReducer;
