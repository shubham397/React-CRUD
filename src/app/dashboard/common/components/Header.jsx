import React from "react";
import PropTypes from "prop-types";

// FIXME: Fix the named exports
import { CLIENT, APPLICATION, VERBIAGE, ICONS } from "../../../utils/enums/index";

import "../styles/header.scss";

const Header = props => {
    const { name, client } = props;
    return (
      <div className={Header.styles.rootContainer}>
        <div className={Header.styles.brandingContainer}>
          {client && (
            <img
              className={Header.styles.clientLogo}
              alt="client-logo"
              src={CLIENT[client].LOGO}
            />
                )}
          <div className={Header.styles.applicationName}>{APPLICATION.NAME}</div>
        </div>
        <div className={Header.styles.userInfoContainer}>
          {name && <div className={Header.styles.username}>{`Hi, ${name}`}</div>}
          <button type="button" className={Header.styles.refreshButton}>
            <img className={Header.styles.icons} alt="refresh-icon" src={ICONS.RELOAD} />
            {VERBIAGE.BUTTONS.REFRESH}
          </button>
          <button className={Header.styles.logoutButton} type="button">
            <img className={Header.styles.icons} alt="logout-icon" src={ICONS.LOGOUT} />
            {VERBIAGE.BUTTONS.LOGOUT}
          </button>
        </div>
      </div>
    );
};

Header.styles = {
    rootContainer: "nos-ds__header-container-root",
    brandingContainer: "nos-ds__header-container-branding",
    clientLogo: "nos-ds__header-container-branding-client-logo",
    userInfoContainer: "nos-ds__header-container-info-container",
    applicationName: "nos-ds__header-application-name",
    username: "nos-ds__header-container-info-name",
    logoutButton: "nos-ds__header-container-button-logout",
    refreshButton: "nos-ds__header-container-button-refresh",
    icons: "nos-ds__header-container-button-icon"
};

Header.propTypes = {
    name: PropTypes.string,
    client: PropTypes.string
};

Header.defaultProps = {
    name: "User",
    client: "CONNECTING_THE_DOTS"
};

export default Header;
