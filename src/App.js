import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";

import NavBar from "./components/NavBar";
import Main from "./components/Main";

import myAWS from "./config/DynamoDB";
const docClient = new myAWS.DynamoDB.DocumentClient();

const onRead = () => {
  let params = {
    TableName: "comments",
  };

  docClient.scan(params, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
};

function App() {
  // onRead();

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
