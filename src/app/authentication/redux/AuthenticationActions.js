import AuthenticationActionTypes from "./AuthenticationActionTypes";
import api from "../../utils/API";
import URL from "../../utils/URL";

const AuthenticationActions = {
    setAuthenticationResponse: payload => ({
        type: AuthenticationActionTypes.SET_CREDENTIALS,
        payload
    }),

    validateCredentials: () => (dispatch, getState) => {
        const { token } = getState().authentication;

        api.post(URL.AUTHENTICATION.VALIDATE, { params: { token } }).then(response => {
            dispatch(AuthenticationActions.setAuthenticationResponse(response.data));
        });
    },

    postCredentials: credentials => dispatch => {
        api.post(URL.AUTHENTICATION.LOGIN, {
            params: {
                username: credentials.username,
                password: credentials.password
            }
        }).then(response => {
            dispatch(AuthenticationActions.setAuthenticationResponse(response.data));
        });
    }
};

export default AuthenticationActions;
