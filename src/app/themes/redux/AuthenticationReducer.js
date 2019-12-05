import AuthenticationActionTypes from "./AuthenticationActionTypes";

const initialState = {
    username: "",
    token: "",
    isUserAuthenticated: true
};

const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case AuthenticationActionTypes.FETCH_DATA:
            return {
                ...state
            };
        case AuthenticationActionTypes.SET_DATA:
            return {
                ...state,
                isUserAuthenticated: true,
                username: action.payload.username,
                token: action.payload.token
            };
        default:
            return state;
    }
};

export default authenticationReducer;
