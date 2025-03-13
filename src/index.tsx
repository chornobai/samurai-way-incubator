import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux/redux-store";

import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

// let rerenderDom = (state: AppStateType) => {

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById("root")
);
