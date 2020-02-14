import * as React from "react";
import "./toggle.scss";

interface IState {
  // name?: IAnimated;
  // title?: IAnimated;
  // findOutMore?: IAnimated;
  themeText: string;
  themeClass: string;
}

interface IProps {
  //     userDetails: IUserDetails;
  //   themeClass: string;
  themeClass: string;
  updateThemeClass: Function;
}

// export interface IProps {
//   themeClass: string;
// }

class Toggle extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      themeText: "Dark Theme",
      themeClass: "Dark"
    };
  }

  changeThemeText = () => {
    console.log("changeText");
    //   this.setState({ themeText: "Light Theme", themeClass: "Light" });

    this.state.themeClass == "Dark"
      ? this.setState({ themeText: "Light Theme", themeClass: "Light" })
      : this.setState({ themeText: "Dark Theme", themeClass: "Dark" });

    //this.state.themeClass == "Light" ? this.state.themeClass: "Light" : this.state.themeClass: "Dark"
  }; // If (.themeClass == "Light") is true  (on click) then change to Dark
  render() {
    return (
      <div className="button-container">
        <button
          className={this.state.themeClass}
          id="toggle-button-theme"
          onClick={this.changeThemeText}
        >
          {this.state.themeText}
        </button>
      </div>
    );
  }
}

export default Toggle;
