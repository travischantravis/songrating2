import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import SongList from "./components/SongList";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SearchBar />
        {/* <SongList /> */}
      </div>
    </Provider>
  );
}

export default App;
