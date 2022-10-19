import React from "react";
import footer from "./footer.module.css";

const Footer = () => {
  return (
    <footer id='kontakt' className={footer.mainFooter}>
      <div className={footer.autoContainer}>
        <div className={footer.contactInfo}>
          <h3>Kontaktirajte nas</h3>
          {/* <p className={footer.contactUsText}>Text</p> */}
          <ul className={footer.contactUsInfo}>
            <li>
              <strong>Adresa:</strong>
              <a href='/'> Dimitrija Tucovića 196a</a>
            </li>
            <li>
              <strong>Email: </strong>
              <a href='mailto:weltautomotive@example.com'>
                weltautomotive@gmail.com
              </a>
            </li>
            <li>
              <strong>Mobilni telefon: </strong>
              <a href='/'>+381 62 472 000</a>
            </li>
            <li>
              <strong>Fiksni telefon: </strong>
              <a href='/'>018 45 64 250</a>
            </li>
          </ul>
        </div>
      </div>

      <hr style={{ width: "80%" }} />
      <p>@Welt automotive 2022 SVA PRAVA ZADRŽANA </p>
    </footer>
  );
};

export default Footer;
