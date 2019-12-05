import AuthenticationActionTypes from "./AuthenticationActionTypes";
import api from "../../utils/API";
import URL from "../../utils/URL";

const AuthenticationActions = {
    getData: () => dispatch => {
        api.get(URL.AUTHENTICATION.LOGIN).then(response => {
            dispatch(AuthenticationActions.setData(response.data));
        });
    },

    setData: payload => ({ type: AuthenticationActionTypes.SET_DATA, payload })
};

export default AuthenticationActions;
