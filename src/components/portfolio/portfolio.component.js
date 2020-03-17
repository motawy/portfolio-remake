import React from 'react';
import TitleSection from '../title-section/title-section.component';
import Element from './element/element.component';
import crwn from '../../img/portfolio/crwn.png';
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
              title="CRWN Clothing"
            />
            <Element
              link="https://github.com/motawy/crwn-clothing"
              image={crwn}
              title="CRWN Clothing"
            />
            <Element
              link="https://github.com/motawy/crwn-clothing"
              image={crwn}
              title="CRWN Clothing"
            />
            <Element
              link="https://github.com/motawy/crwn-clothing"
              image={crwn}
              title="CRWN Clothing"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
