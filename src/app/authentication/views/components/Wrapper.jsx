import React from "react";
import PropTypes from "prop-types";

import "../styles/wrapper.scss";

const Wrapper = props => {
    const { children } = props;
    return <div className={Wrapper.styles.root}>{children}</div>;
};

Wrapper.styles = {
    root: "nos_ds__wrapper-root"
};

Wrapper.propTypes = {
    children: PropTypes.node.isRequired
};

export default Wrapper;
