import React,{useRef} from "react";
import styles from "./NavMenu.module.css";

const NavMenu = () => {
const navRef = useRef()


  return (
    <div ref={navRef} className={styles.navMenu}>
      <div className={styles.navSocial}>
       <a href="https://www.facebook.com/tehnickipreglednis/" target="_blank"> 
          <img
          src={require("../../assets/icons/socialIcons/facebook.png")}
          alt="facebook"
          />
        </a>
        {/* <img
          src={require("../../assets/icons/socialIcons/instagram.png")}
          alt="instagram"
        />
        <img
          src={require("../../assets/icons/socialIcons/twitter.png")}
          alt="twitter"
        /> */}
      </div>
    </div>
  );
};

export default NavMenu;
