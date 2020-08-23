import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";

import NavBar from "./components/NavBar";
import Main from "./components/Main";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Main />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
