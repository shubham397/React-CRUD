import { combineReducers } from "redux";

import authentication from "./authentication/redux/AuthenticationReducer";

// import dashboard from "./dashboard/redux/DashboardReducer";

export default combineReducers({
    authentication
    // dashboard
});
