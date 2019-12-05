import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Dashboard from "../dashboard/Dashboard";

const Routes = () => {
    return (
      <Router>
        <div>
          <Route path="/" component={Dashboard} />
        </div>
      </Router>
    );
};

export default Routes;
