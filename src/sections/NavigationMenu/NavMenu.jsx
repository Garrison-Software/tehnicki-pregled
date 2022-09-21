import React,{useRef} from "react";
import styles from "./NavMenu.module.css";

const NavMenu = () => {

const handleScrollNav = (e) =>
{
  console.log(e.getBoundingClientRect());
}
  return (
    <div onScroll={handleScrollNav} className={styles.navMenu}>
      <div className={styles.navList}>
        <a href="/home">Home</a>
        <a href="/about"> O nama</a>
        <a href="/cenovnik">Cenovnik</a>
        <a href="/promocije">Promocije</a>
        <a href="/kontakt">Kontakt</a>
      </div>

      <div className={styles.navSocial}>
        <img
          src={require("../../assets/icons/socialIcons/facebook.png")}
          alt="facebook"
        />
        <img
          src={require("../../assets/icons/socialIcons/instagram.png")}
          alt="instagram"
        />
        <img
          src={require("../../assets/icons/socialIcons/twitter.png")}
          alt="twitter"
        />
      </div>
    </div>
  );
};

export default NavMenu;
