import AuthenticationActionTypes from "./AuthenticationActionTypes";

const initialState = {
    username: "",
    token: "",
    isUserAuthenticated: false
};

const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case AuthenticationActionTypes.FETCH_DATA:
            return {
                ...state
            };
        case AuthenticationActionTypes.SET_CREDENTIALS:
            return {
                ...state,
                isUserAuthenticated: !!action.payload.token,
                username: action.payload.username,
                token: action.payload.token
            };
        default:
            return state;
    }
};

export default authenticationReducer;
