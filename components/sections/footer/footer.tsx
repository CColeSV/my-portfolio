import * as React from "react";

import "./footer.scss";

interface IProps {
  themeClass: string;
}

const Footer: React.StatelessComponent<IProps> = () => {
  return (
    <footer className="section section-dark section-footer">
      <div className="footer-container">Copyright © 2020 Craig Coleman</div>
    </footer>
  );
};

export default Footer;
