import { combineReducers } from "redux";
import songReducer from "./song/songReducer";
import spotifyReducer from "./spotify/spotifyReducer";

const rootReducer = combineReducers({
  song: songReducer,
  spotify: spotifyReducer,
});

export default rootReducer;
