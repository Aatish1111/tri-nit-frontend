import React from "react";
import './Footer.scss'
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import FooterLogo from "../../Assets/logo.png";

const Footer = () => {
  return (
      <div className="Footer">
      <div className="Footer-left">
        <img src={FooterLogo} alt="Footer logo" />
        <div className="Footer-left-text">
          <p>
          Effective platform to connect philanthropists and NGOs to help growing need in a positively impact
society.
          </p>
        </div>
      </div>
      <div className="Footer-right">
        <a className="Footer-right_socials" href="https://www.instagram.com/">
            <FaInstagram className="icons" />
        </a>
        <a className="Footer-right_socials" href="https://twitter.com/">
            <FaTwitter className="icons" />
        </a>
        <a className="Footer-right_socials" href="https://www.youtube.com/channel/">
            <FaYoutube className="icons" />
        </a>
      </div>
    </div>
  );
};

export default Footer;