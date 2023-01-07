import React from "react";
import "./styles.scss";
// @ts-ignore
import profile from "../../assets/images/profile.jpg";
// @ts-ignore
import reactLogo from "../../assets/images/react-logo.svg";
type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="banner-container">
      <div className="grid1-container">
        <div className="text-container">
          <div className="designation">Front-End Developer</div>
          <h2 className="banner-text-header">
            What's better than an engineer?
          </h2>
          <h2 className="banner-text-header bt-header">
            A front end engineer.
          </h2>
          <p className="para-text">I make web apps which are efficient</p>
          <p className="para-text">and less time consuming!</p>
        </div>
      </div>
      <div className="grid2-container">
        <img src={profile} alt="profile" className="profile-image" />
        <div>
          <img
            src={reactLogo}
            alt="react-logo"
            className="react-logo"
            width={"100px"}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
