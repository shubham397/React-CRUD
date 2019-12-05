import React from "react";
import { Route } from "react-router-dom";
// import AttendanceReport from "./attendance-report/AttendanceReportContainer";
import Country from "./country/countryContainer";

import CRUD from "./country/countryContainer";

import Text from "./textBox/textBoxContainer";

const DashboardRoutes = () => {

let mainDivStyle = {
  marginLeft:"27%"
}

    return (
      <div className="mainDiv" style={mainDivStyle}>
        <Route path="/country" component={Country} />
        <Route path="/text" component={Text} />
        <Route path="/crud" component={CRUD} />
        {/* <Route path="/dashboard/attendance" component={AttendanceReport} /> */}
      </div>
    );
};

export default DashboardRoutes;
