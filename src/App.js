import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import SongList from "./components/SongList";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SongList />
      </div>
    </Provider>
  );
}

export default App;
