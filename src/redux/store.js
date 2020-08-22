import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./rootReducer";
import { setAuthState } from "./localStorage";

const store = createStore(rootReducer, applyMiddleware(thunk));

// Listen to changes in state and update local storage
store.subscribe(() => {
  setAuthState(store.getState());
});

export default store;
