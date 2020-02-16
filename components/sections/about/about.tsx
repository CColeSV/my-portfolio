import * as React from "react";

import "./about.scss";

const renderAboutText = (aboutTextList: string[]) => (
  <div className="about-text">
    {aboutTextList.map((textSection, i) => (
      <p key={i}>{textSection}</p>
    ))}
  </div>
);

interface IProps {
  aboutTextList: string[];
  themeClass: string;
}

const About: React.StatelessComponent<IProps> = ({
  aboutTextList,
  themeClass
}) => {
  return (
    <section
      className={`section section-primary section-about ${
        themeClass === "Dark" ? "about-dark" : ""
      }`}
    >
      <h2>About Craig</h2>
      <div className="content-container about-container">
        <img className="portrait" src="/static/images/profile-picture.jpg" />
        {renderAboutText(aboutTextList)}
      </div>
    </section>
  );
};

export default About;
