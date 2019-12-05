import DashboardActionTypes from "./DashboardActionTypes";
import API from "../../../utils/API";
import URL from "../../../utils/URL";

const DashboardActions = {
    getData: () => dispatch => {
        API.get(URL.DAHSBOARD.HOME).then(response =>
            dispatch(DashboardActions.setData(response.data)),
        );
    },

    setData: payload => ({ type: DashboardActionTypes.SET_DATA, payload })
};

export default DashboardActions;
