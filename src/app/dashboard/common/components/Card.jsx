import React from "react";

import "../styles/card.scss";
// import ENUMS from "../../../utils/ENUMS";

const Card = props => {
    const {
        name,
        capital,
        region,
        population,
        area,
        flag
    } = props;

    return (
      <div className={Card.styles.cardContainer}>
        <h2 className={Card.styles.greenColor}>Name: {name}</h2>
        <img height="180px" width="200px" alt="icon" src={flag} className={Card.styles.logoStyling} />
        <h3 className={Card.styles.primaryData}>Capital: {capital}</h3>
        <div className={Card.styles.secondaryContainer}>
          <h4 className={Card.styles.secondaryDataLeft}>Region: {region}</h4>
          <h4 className={Card.styles.secondaryDataCenter}>Population: {population}</h4>
          <h4 className={Card.styles.secondaryDataRight}>Area: {area}</h4>
        </div>
      </div>
    );
};

Card.styles = {
    cardContainer: "nos-ds__card-container",
    cardStyling: "nos-ds__card-container",
    logoStyling: "nos-ds__card-logo",
    primaryData: "nos-ds__card-primary-data",
    secondaryDataLeft: "nos-ds__card-secondary-data-left",
    secondaryDataCenter: "nos-ds__card-secondary-data-center",
    secondaryDataRight: "nos-ds__card-secondary-data-right",
    secondaryContainer: "nos-ds__card-secondary-container"
};

export default Card;

// <div className={Card.styles.cardContainer}>
//   <h2 className={Card.styles.greenColor}>
//     {ENUMS.CARD.LABEL}
//   </h2>
//   <img alt="icon" src={ENUMS.CARD.ICON_URL} className={Card.styles.logoStyling} />
//   <h3 className={Card.styles.primaryData}>
//     {ENUMS.CARD.PRIMARY_DATA}
//   </h3>
//   <div className={Card.styles.secondaryContainer}>
//     <h4 className={Card.styles.secondaryDataLeft}>
//       {ENUMS.CARD.SECONDARY_DATA_LEFT}
//     </h4>
//     <h4 className={Card.styles.secondaryDataCenter}>
//       {ENUMS.CARD.SECONDARY_DATA_CENTER}
//     </h4>
//     <h4 className={Card.styles.secondaryDataRight}>
//       {ENUMS.CARD.SECONDARY_DATA_RIGHT}
//     </h4>
//   </div>
// </div>
