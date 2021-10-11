import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";
import App from "./Components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./Utils/Reducers/Index";
import middleware from "./Utils/Middleware/Index";

const store = createStore(rootReducer, middleware);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
