import { combineReducers } from "redux";
import trackReducer from "./track/trackReducer";
import spotifyReducer from "./spotify/spotifyReducer";
import commentReducer from "./comment/commentReducer";
import authReducer from "./auth/authReducer";
import profileReducer from "./profile/profileReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  comment: commentReducer,
  profile: profileReducer,
  spotify: spotifyReducer,
  track: trackReducer,
});

export default rootReducer;
