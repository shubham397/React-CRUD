import React from "react";
import { Header, Footer } from "./common";
import DashboardRoutes from "./DashboardRoutes";


import "./styles/dashboard.scss";

const DashboardContainer = () => {

  

  return (
    <div className={DashboardContainer.styles.root}>
      <Header />
      <div className={DashboardContainer.styles.content}>
        <DashboardRoutes />
      </div>
      <Footer />
    </div>
  );
};

DashboardContainer.styles = {
  root: "nos-ds__dashboard-root",
  content: "nos-ds__dashboard-content"
};

export default DashboardContainer;