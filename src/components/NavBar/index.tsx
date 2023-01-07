import React from "react";
import "./styles.scss";
import { BsTwitter, BsGithub } from "react-icons/bs";
type Props = {};

const Header = (props: Props) => {
  return (
    <nav className="header-container">
      <div className="header-title">
        R<span className="header-title-sm">ahul</span>{" "}
        <span className="lastname">
          {" "}
          D<span className="header-title-sm">as</span> S
          <span className="header-title-sm">arma</span>
        </span>
      </div>
      <div className="multiple-icon-container">
        <div className="icon-container">
          <BsTwitter className="icon" />
          <span className="icon-text">Twitter</span>
        </div>
        <div className="icon-container left-m-icon">
          <BsGithub className="icon" />
          <span className="icon-text">Github</span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
