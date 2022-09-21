import React from "react";
import header from "./header.module.css";

const Header = () => {
  return (

    <div className={header.mainContainer}>
      <div className={header.logo}>
        <img
          src={require("../../assets/icons/header/logoWeltAuto1.png")}
          alt="logo"
        />
      </div>
      <div className={header.callUsHours}>
        <div className={header.callWraper}>

          <span className={header.phoneIcon}>
            <img src={require("../../assets/icons/header/header-phone.webp")} alt="alt" />
          </span>
            <p className={header.phone}>
              <span>Call us now!</span>
              <br />
              <span>(123) 456 7890</span>
            </p>

        </div>
        <div className={header.timeWraper}>
        <span className={header.timeIcon}>
            <img src={require("../../assets/icons/header/header-timer.webp")} alt="time" />
          </span>
            <p className={header.time}>
              <span>Call Us Now!</span>
              <br />
              <span>Mon - Sat 9:00 - 19:00</span>
            </p>
        </div>
      </div>  
    </div>
  );
};

export default Header;
