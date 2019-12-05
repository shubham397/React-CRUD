import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import "babel-polyfill";
import Store from "./app/Store";
// import App from "./app/App";
import Router from "./app/routes/Routes";

// To Use React Router with Redux,
// a configured router is required.
render(
  <Provider store={Store}>
    <Router />
  </Provider>,
    document.getElementById("container"),
);
