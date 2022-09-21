import React from "react";
import header from "./header.module.css";

const Header = () => {
  return (
    <div id="home" className={header.mainContainer}>
      <header className={header.mainHeader}>
        <div className={header.headerTop}>
          <div className={header.hdTopContainer}>
            <div className={header.logoDiv}>
              <img
                src={require("../../assets/icons/header/logoWeltAuto1.png")}
                alt=""
              />
            </div>
            <div className={header.callUsHours}>
              <ul>
                <li className={header.phoneLi}>
                  <p>
                    <b>Call us now!</b>
                    <br />
                    "(123) 456 7890"
                  </p>
                </li>
                <li className={header.timeLi}>
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
        <div className={header.headerBottom}>
          <div className={header.hdBottomContainer}>
            <nav className={header.btContainerNav}>
              <div className={header.navbarHeader}></div>
              <div></div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
