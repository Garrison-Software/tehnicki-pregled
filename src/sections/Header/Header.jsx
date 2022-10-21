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
            <p className={header.phone} style={{fontSize:"1.3rem", fontWeight:700}}>
              <span>Info i zakazivanje:</span>
              <br />
              <span>062 472 000</span> <br/>
              <span>018 45 64 250</span>
            </p>

        </div>
        <div className={header.timeWraper}>
        <span className={header.timeIcon}>
            <img src={require("../../assets/icons/header/header-timer.webp")} alt="time" />
          </span>
            <p className={header.time} style={{fontSize:"1.3rem", fontWeight:700}}>
              <span>Radno vreme:</span>
              <br />
             <span  style={{borderBottom:"1px solid black"}} >Pon - Pet:  8:00 - 17:00</span>
              <br/>
              <span style={{borderBottom:"1px solid black"}} >Sub: 8:00 - 14:00</span>
              <br/>
              <span >Nedelja: Neradna</span>

            </p>
        </div>
      </div>  
    </div>
  );
};

export default Header;
