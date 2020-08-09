import { combineReducers } from "redux";
import trackReducer from "./track/trackReducer";
import spotifyReducer from "./spotify/spotifyReducer";

const rootReducer = combineReducers({
  track: trackReducer,
  spotify: spotifyReducer,
});

export default rootReducer;
