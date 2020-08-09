import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import NavBar from "./components/NavBar";
import Main from "./components/Main";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NavBar />
        <Main />
      </div>
    </Provider>
  );
}

export default App;
