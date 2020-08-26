import { combineReducers } from "redux";
import trackReducer from "./track/trackReducer";
import spotifyReducer from "./spotify/spotifyReducer";
import commentReducer from "./comment/commentReducer";
import authReducer from "./auth/authReducer";

const rootReducer = combineReducers({
  track: trackReducer,
  spotify: spotifyReducer,
  comment: commentReducer,
  auth: authReducer,
});

export default rootReducer;
