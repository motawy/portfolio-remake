import React from 'react';
import AboutPersonal from './about-personal/about-personal.component';
import AboutCV from './about-cv/about-cv.component';
import './about.styles.scss';
import AboutText from './about-text/about-text.component';
import AboutTitle from './about-title/about-title.component';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-wrapper">
        <AboutTitle />
        <div className="about-container">
          <div className="about-pic">
            <img src="https://via.placeholder.com/1080x1920" alt="about" />
          </div>
          <div className="about-info">
            <div className="about-name">
              <h3>Hi, I'm Mido</h3>
            </div>
            <div className="about-subtitle">
              <p>
                <span>Full-Stack</span> Developer, based in Australia
              </p>
            </div>
            <AboutText />
            <AboutPersonal />
            <AboutCV />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
