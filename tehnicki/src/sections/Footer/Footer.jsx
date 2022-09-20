import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-upper">
        <div className="auto-container">
          <div className="contact-info">
            <div className="contact-widget">
              <h3>Contact Us</h3>
              <div className="contact-us-text">
                <p>Text</p>
              </div>
              <ul className="contact-us-info">
                <li>
                  <strong>Email </strong>
                  <a href="mailto:someone@example.com">someone@example.com</a>
                </li>
                <li>
                  <strong>Phone </strong>
                  <a href="#">+49 123 456 789</a>
                </li>
                <li>
                  <strong>Fax </strong>
                  <a href="#">+49 123 456 789</a>
                </li>
                <li>
                  <strong>Website </strong>
                  <a href="http://www.carshire.com">www.carshire.com</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-services">
            <div className="services-widget">
              <h3>Our Services</h3>
              <ul className="links">
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
          </div>

          <div className="footer-support">
            <div className="services-widget">
              <h3>Our Support</h3>
              <ul class="links">
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
        </div>
      </div>
      <div className="footer-bottom"></div>
    </footer>
  );
};

export default Footer;
