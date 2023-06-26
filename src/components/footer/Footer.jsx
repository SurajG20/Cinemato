import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

import ContentWrapper from '../contentWrapper/ContentWrapper';

import './style.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <div className="footerTitle">Cinemato</div>
        <div className="infoText">
          Copyright © {new Date().getFullYear()} Cinemato. All Rights Reserved.
        </div>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>

        <div className="socialIcons">
          <span className="icon">
            <a
              className="footerLink"
              href="https://github.com/SurajG20"
              target="blank"
            >
              <FaGithub />
            </a>
          </span>
          <span className="icon">
            <a
              className="footerLink"
              href="https://www.linkedin.com/in/suraj-goswami-8b9106246"
              target="blank"
            >
              <FaLinkedin />
            </a>
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
