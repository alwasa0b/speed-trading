import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import store from "./store";
import { Provider } from 'react-redux'
import { createStore } from "redux";


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
