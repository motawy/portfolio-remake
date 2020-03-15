import React from 'react';
import Social from '../social/social.component';
import './menu.styles.scss';

const Menu = () => {
  return (
    <div className="menu">
      <div className="wrap">
        <nav className="nav">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About me</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="info">
          <div className="info-wrap">
            <span>CONTACT INFO :</span>
            <ul className="contact">
              <li>Melbourne, AU</li>
              <li>+61 402 671 497</li>
              <li>hello@motawy.me</li>
            </ul>
            <span>FOLLOW ME :</span>
            <ul className="link">
              <Social
                title="GitHub"
                link="https://github.com/motawy"
                icon="github-alt"
                size="2x"
              />
              <Social
                title="Twitter"
                link="https://twitter.com/mohammed_tawy"
                icon="twitter"
                size="2x"
              />
              <Social
                title="LinkedIn"
                link="https://www.linkedin.com/in/mohammed-tantawy"
                icon="linkedin"
                size="2x"
              />
              <Social
                title="Medium"
                link="https://www.medium.com/@mtantawy.mido"
                icon="medium-m"
                size="2x"
              />
            </ul>
          </div>
        </div>
      </div>
      <div className="close_btn">
        <span></span>
      </div>
    </div>
  );
};

export default Menu;
