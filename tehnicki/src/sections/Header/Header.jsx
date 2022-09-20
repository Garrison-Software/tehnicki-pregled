import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="main-container">
      <header className="main-header">
        <div className="header-top">
          <div className="hd-top-container">
            <div className="logo-div">
              <img
                src={require("../../assets/icons/header/logoWeltAuto1.png")}
                alt=""
              />
            </div>
            <div className="call-us-hours">
              <ul>
                <li className="phone-li">
                  <p>
                    <b>Call us now!</b>
                    <br />
                    "(123) 456 7890"
                  </p>
                </li>
                <li className="time-li">
                  <p>
                    <b>Opening hours:</b>
                    <br />
                    "Mon - Sat 9.00 - 19.00"
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <div className="hd-bottom-container">
            <nav className="bt-container-nav">
              <div className="navbar-header"></div>
              <div></div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
