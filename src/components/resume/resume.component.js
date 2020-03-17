import React from 'react';
import './resume.styles.scss';
import Education from './education/education.component';
import Work from './work/work.component';
import TitleSection from '../title-section/title-section.component';

const Resume = () => {
  return (
    <section className="resume" id="resume">
      <div className="wrapper">
        <TitleSection firstPart="My" secondPart="Resume" description="Here's some of my most recent work." />
        <div className="main">
          <Education />
          <Work />
        </div>
      </div>
    </section>
  );
};

export default Resume;
