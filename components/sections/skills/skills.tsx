import * as React from "react";

import "./skills.scss";

import Skill from "../../shared/skill/skill";
import { SkillEnum } from "../../../constants";

interface IProps {
  skillList: SkillEnum[];
  themeClass: string;
}

const Skills: React.StatelessComponent<IProps> = ({
  skillList,
  themeClass
}) => {
  return (
    <section
      className={`section section-primary ${
        themeClass === "Dark" ? "skills-dark" : ""
      }`}
    >
      <h2>Skills</h2>

      <div className="skills-container">
        {skillList.map((skill, i) => (
          <Skill key={i} themeClass={themeClass} skill={skill} size="large" />
        ))}
      </div>
    </section>
  );
};

export default Skills;
