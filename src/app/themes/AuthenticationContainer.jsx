import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import AuthenticationActions from "./redux/AuthenticationActions";
import Login from "./views/Login";

const AuthenticationContainer = props => {
    const { authentication, getAuthenticationToken } = props;

    useEffect(() => getAuthenticationToken(), [getAuthenticationToken]);

    return <Login username={authentication.username} />;
};

AuthenticationContainer.propTypes = {
    authentication: PropTypes.object.isRequired,
    getAuthenticationToken: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    authentication: state.authentication
});

const mapDispatchToProps = dispatch => ({
    getAuthenticationToken: () => {
        dispatch(AuthenticationActions.getData());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AuthenticationContainer);
