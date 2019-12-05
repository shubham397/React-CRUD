import DashboardActionTypes from "./DashboardActionTypes";

const initialState = {
    greeting: "",
    name: ""
};

const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case DashboardActionTypes.FETCH_DATA:
            return {
                ...state
            };
        case DashboardActionTypes.SET_DATA:
            return {
                ...state,
                greeting: "Hello",
                name: "World"
            };
        default:
            return state;
    }
};

export default dashboardReducer;
