import React from "react";
import logo from "../img/logo.png";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer__logo-box">
        <img src={logo} alt="Full logo" />
      </div>
      <div class="row">
        <div class="col-1-of-2">
          <div class="footer__navigation">
            <ul class="footer__list">
              <li class="footer__item">
                <a href="#" class="footer__link">
                  Company
                </a>
              </li>
              <li class="footer__item">
                <a href="#" class="footer__link">
                  Contact List
                </a>
              </li>
              <li class="footer__item">
                <a href="#" class="footer__link">
                  Careers
                </a>
              </li>
              <li class="footer__item">
                <a href="#" class="footer__link">
                  Privacy Policy
                </a>
              </li>
              <li class="footer__item">
                <a href="#" class="footer__link">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-1-of-2">
          <p class="footer__copyright footer__navigation">
            Built and owned by Space X and Elon Musk. To the Moon.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
