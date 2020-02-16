import * as React from "react";

import "./info-card.scss";

interface IProps {
  cardDetails: IInfoCard;
  themeClass: string;
}

export interface IInfoCard {
  darkLogo: string;
  logo: string;
  headings: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  description: string;
  isLast?: boolean;
}

const InfoCard: React.StatelessComponent<IProps> = props => {
  const {
    cardDetails: { logo, headings, description, isLast, darkLogo }
  } = props;

  return (
    <div
      className={
        `info-card-container ${
          props.themeClass === "Dark" ? "info-dark" : ""
        }` + (isLast ? " last-card" : "")
      }
    >
      <div className="logo-container">
        <img
          src={`/static/images/logos/${
            props.themeClass === "Dark" ? darkLogo : logo
          }`}
        />
      </div>

      <div className="details-container">
        <h3>{headings.primary}</h3>
        <h4>{headings.secondary}</h4>
        <h5>{headings.tertiary}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
