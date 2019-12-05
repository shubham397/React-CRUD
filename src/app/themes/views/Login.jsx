import React from "react";

const Login = props => {
    const { username } = props;

    return (
      <div>
        <span>Hi &nbsp;</span>
        <span>{username}</span>
        <span>Login Screen</span>
      </div>
    );
};

export default Login;
