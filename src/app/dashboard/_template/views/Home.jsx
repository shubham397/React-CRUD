import React from "react";
import PropTypes from "prop-types";

import "../styles/home.scss";

const Home = props => {
    const { greeting, name } = props;

    return (
      <div>
        <span>{greeting}</span>
            &nbsp;
        <span className="nos-brandis__text">{name}</span>
      </div>
    );
};

Home.propTypes = {
    greeting: PropTypes.string,
    name: PropTypes.string
};

Home.defaultProps = {
    greeting: "Hi",
    name: "Sam"
};

export default Home;
