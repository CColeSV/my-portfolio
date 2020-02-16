import * as React from "react";
import "./App.scss";

import Landing from "./sections/landing/landing";
import About from "./sections/about/about";
import Experience from "./sections/experience/experience";
// import Education from "./sections/education/education";
import Projects from "./sections/projects/projects";
import Skills from "./sections/skills/skills";
import Contact from "./sections/contact/contact";
import Footer from "./sections/footer/footer";
import PortfolioDataService from "../services/portfolio-data.service";
import Toggle from "../components/shared/toggle/toggle";

interface IState {
  themeClass: string;
}

interface IProps {
  //     userDetails: IUserDetails;
  //   themeClass: string;
}

class App extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      themeClass: "Light"
    };
  }

  updateThemeClass = newThemeClass => {
    this.setState({ themeClass: newThemeClass });
  };

  public render() {
    return (
      <div className="app-container">
        <Toggle
          themeClass={this.state.themeClass}
          updateThemeClass={this.updateThemeClass}
        />
        <Landing
          themeClass={this.state.themeClass}
          userDetails={PortfolioDataService.userDetails}
        />
        <About
          themeClass={this.state.themeClass}
          aboutTextList={PortfolioDataService.aboutTextList}
        />
        <Experience
          themeClass={this.state.themeClass}
          experienceList={PortfolioDataService.experienceList}
        />
        {/* <Education educationList={PortfolioDataService.educationList} /> */}
        <Projects
          themeClass={this.state.themeClass}
          projectList={PortfolioDataService.projectList}
        />
        <Skills
          themeClass={this.state.themeClass}
          skillList={PortfolioDataService.skillList}
        />
        <Contact
          themeClass={this.state.themeClass}
          socialIconList={PortfolioDataService.socialIconList}
        />
        <Footer themeClass={this.state.themeClass} />
      </div>
    );
  }
}

export default App;
