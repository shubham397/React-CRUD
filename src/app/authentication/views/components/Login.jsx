import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Wrapper from "./Wrapper";
import AuthenticationActions from "../../redux/AuthenticationActions";

import "../styles/login.scss";

const Login = props => {
    const { authentication, validateCredentials, postCredentials } = props;

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async () => {
        await postCredentials({ username, password });

        if (authentication.isUserAuthenticated) {
            props.history.push("/dashboard");
        }
    };

    const redirectToDashboard = () => {
        if (authentication.isUserAuthenticated) {
            props.history.push("/dashboard");
        }
    };

    useEffect(() => validateCredentials(), [validateCredentials]);

    useEffect(() => redirectToDashboard());

    return (
      <Wrapper>
        <div className={Login.styles.root}>
          <b>Login</b>
          <div className={Login.styles.field}>
            <span>Email or Phone</span>
            <input
              className={Login.styles.input}
              onChange={event => setUsername(event.target.value)}
            />
          </div>
          <div className={Login.styles.field}>
            <span>Password</span>
            <input
              type="password"
              value={password}
              className={Login.styles.input}
              onChange={event => setPassword(event.target.value)}
            />
          </div>
          <button className={Login.styles.button} type="submit" onClick={handleSubmit}>
                    Login
          </button>
        </div>
      </Wrapper>
    );
};

Login.propTypes = {
    validateCredentials: PropTypes.func.isRequired,
    postCredentials: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    authentication: state.authentication
});

const mapDispatchToProps = dispatch => ({
    validateCredentials: () => {
        dispatch(AuthenticationActions.validateCredentials());
    },
    postCredentials: credentials => {
        dispatch(AuthenticationActions.postCredentials(credentials));
    }
});

Login.styles = {
    root: "nos-ds__authentication__login-root",
    field: "nos-ds__authentication__login-field",
    input: "nos-ds__authentication__login-input",
    button: "nos-ds__authentication__login-button"
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withRouter(Login));
