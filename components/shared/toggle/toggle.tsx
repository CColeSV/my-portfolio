import * as React from "react";
import "./toggle.scss";

interface IState {
  themeText: string;
}

interface IProps {
  themeClass: string;
  updateThemeClass: Function;
}

class Toggle extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      themeText: "Dark Theme"
    };
  }

  changeThemeText = () => {
    let newThemeClass = this.props.themeClass === "Dark" ? "Light" : "Dark";
    this.props.themeClass == "Dark"
      ? this.setState({ themeText: "Light Theme" })
      : this.setState({ themeText: "Dark Theme" });

    this.props.updateThemeClass(newThemeClass);
  };

  render() {
    return (
      <div className="button-container">
        <button
          className={this.props.themeClass}
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
