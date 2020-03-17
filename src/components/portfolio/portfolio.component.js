import React from 'react';
import TitleSection from '../title-section/title-section.component';
import Element from './element/element.component';
import crwn from '../../img/portfolio/crwn.png';
import giga from '../../img/portfolio/giga.png';
import gmt from '../../img/portfolio/gmt.png';
import sb from '../../img/portfolio/smartbrain.png';
import './portfolio.styles.scss';

const Portfolio = () => {
  return (
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio-wrapper">
        <TitleSection
          firstPart="My"
          secondPart="Portfolio"
          description="Meet My Awesome Works and Enjoy."
        />
        <div>
          <div className="portfolio">
            <Element
              link="https://github.com/motawy/crwn-clothing"
              image={crwn}
              title="CRWN CLOTHING"
            />
            <Element
              link="https://github.com/motawy/giga-ball"
              image={giga}
              title="GIGA BALL"
            />
            <Element
              link="https://github.com/motawy/get-me-there"
              image={gmt}
              title="GET ME THERE"
            />
            <Element
              link="https://github.com/motawy/smart-brain"
              image={sb}
              title="SMART BRAIN"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
