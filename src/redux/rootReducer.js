import { combineReducers } from "redux";
import trackReducer from "./track/trackReducer";
import spotifyReducer from "./spotify/spotifyReducer";
import commentReducer from "./comment/commentReducer";

const rootReducer = combineReducers({
  track: trackReducer,
  spotify: spotifyReducer,
  comment: commentReducer,
});

export default rootReducer;
