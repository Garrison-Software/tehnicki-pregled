import React from "react";
import footer from "./footer.module.css";

const Footer = () => {
  return (
    <footer id="kontakt" className={footer.mainFooter}>
      <div className={footer.autoContainer}>
        <div className={footer.contactInfo}>
          <h3>Contact Us</h3>
          <p className={footer.contactUsText}>Text</p>
          <ul className={footer.contactUsInfo}>
          <li>
              <strong>Adresa:</strong>
              <a href="/"> Dimitrija Tucovića 196</a>
            </li>
            <li>
              <strong>Email: </strong>
              <a href="mailto:someone@example.com">someone@example.com</a>
            </li>
            <li>
              <strong>Phone: </strong>
              <a href="/">+49 123 456 789</a>
            </li>
            <li>
              <strong>Fax: </strong>
              <a href="/">+49 123 456 789</a>
            </li>
            <li>
              <strong>Website: </strong>
              <a href="http://www.carshire.com">www.carshire.com</a>
            </li>
          </ul>
        </div>

        <div className={footer.footerServices}>
          <h3>Our Services</h3>
          <ul className={footer.links}>
            <li>
              <a href="">Speed and engine testing</a>
            </li>
            <li>
              <a href="">Restart and repair service</a>
            </li>
            <li>
              <a href="">Electric car loading</a>
            </li>
            <li>
              <a href="">Yearly weather inspection</a>
            </li>
            <li>
              <a href="">Car liquids replacement</a>
            </li>
          </ul>
        </div>

        <div className={footer.footerSupport}>
          <h3>Our Support</h3>
          <ul className={footer.links}>
            <li>
              <a href="#">How to get started?</a>
            </li>
            <li>
              <a href="#">Frequently asked questions</a>
            </li>
            <li>
              <a href="#">Customer testimonials</a>
            </li>
            <li>
              <a href="#">Get a free quote</a>
            </li>
            <li>
              <a href="#">Help &amp; Support Center</a>
            </li>
          </ul>
        </div>
      </div>

      <hr style={{ width: "80%" }} />
      <p>@Welt automotive ALL RIGHTS RESERVED </p>
    </footer>
  );
};

export default Footer;
