import React from "react";
import styles from "./NavMenu.module.css";

const NavMenu = () => {
  return (
    <div className={styles.navMenu}>
      <div className={styles.navList}>
        <a href="/home">Home</a>
        <a href="/about"> O nama</a>
        <a href="/cenovnik">Cenovnik</a>
        <a href="/zakazivanje">Zakazivanje</a>
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
