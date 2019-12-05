import React from "react";
import "../styles/footer.scss";
import { APPLICATION } from "../../../utils/enums/index";

const Footer = () => {
    return (
      <div className={Footer.styles.rootContainer}>
        <div className={Footer.styles.copyright}>{APPLICATION.COPYRIGHT}</div>
        <div className={Footer.styles.logoContainer}>
          <img
            className={Footer.styles.companyLogo}
            alt="company-logo"
            src={APPLICATION.COMPANY_LOGO_URL}
          />
        </div>
      </div>
    );
};

Footer.styles = {
    companyLogo: "nos-ds__footer-logo",
    copyright: "nos-ds__footer-copyright",
    rootContainer: "nos-ds__footer-container-root",
    logoContainer: "nos-ds__footer-container-logo"
};

export default Footer;
