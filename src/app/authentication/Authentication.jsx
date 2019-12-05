import React from "react";
import { Route } from "react-router-dom";
import { Login, Registration } from "./views";

const Authentication = () => (
  <div>
    <Route exact path="/" component={Login} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Registration} />
  </div>
);

export default Authentication;
