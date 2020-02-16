import * as React from "react";

import "./experience.scss";
import InfoCard, { IInfoCard } from "../../shared/info-card/info-card";
// import Toggle, { themeClass } from "../../shared/toggle/toggle";

interface IProps {
  experienceList: IInfoCard[];
  themeClass: string;
}

//className={props.themeClass}

const Experience: React.StatelessComponent<IProps> = ({
  experienceList,
  themeClass
}) => {
  return (
    <section
      className={`section section-secondary ${
        themeClass === "Dark" ? "exp-dark" : ""
      }`}
    >
      <h2>Experience</h2>

      <div className="content-container experience-container">
        {experienceList.map((exp, i) => (
          <InfoCard key={i} cardDetails={exp} themeClass={themeClass} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
