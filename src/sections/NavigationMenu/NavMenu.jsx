import React,{useRef,useEffect} from "react";
import {Link} from "react-scroll";
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
        <Link to="/" spy={true} smooth={true} offset={-150} duration={500}>Home</Link>
        <Link to="about" spy={true} smooth={true} offset={-150} duration={500}> O nama</Link>
        <Link to="cenovnik" spy={true} smooth={true} offset={-150} duration={500}>Cenovnik</Link>
        <Link to="promocije" spy={true} smooth={true} offset={50} duration={500}>Promocije</Link>
        <Link to="kontakt" spy={true} smooth={true} offset={-150} duration={500}>Kontakt</Link>
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
