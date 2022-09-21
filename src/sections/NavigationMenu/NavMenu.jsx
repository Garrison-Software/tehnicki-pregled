import React,{useRef,useEffect} from "react";
import styles from "./NavMenu.module.css";

const NavMenu = () => {
const navRef = useRef()

const handleScrollEvent = () =>
{
  window.scrollY > 70 && navRef.current.setAttribute("style","opacity:0.8") ;
}

useEffect(()=>
{
  window.addEventListener("scroll", handleScrollEvent)

},[])



  return (
    <div ref={navRef} className={styles.navMenu}>
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
