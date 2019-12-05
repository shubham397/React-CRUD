import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoutes = ({ component: Component, ...rest }) => {
    const params = { ...rest };
    return (
      <Route
        {...rest}
        render={props =>
                params.authentication.isUserAuthenticated ? (
                  <Component {...props} />
                ) : (
                  <Redirect
                    to={{
                            pathname: "/login",
                            state: { from: props.location }
                        }}
                  />
                )
            }
      />
    );
};

const mapStateToProps = state => ({
    authentication: state.authentication
});

export default connect(mapStateToProps)(PrivateRoutes);
