import React from 'react';
import './resume.styles.scss';
import Title from './title/title.component';
import Education from './education/education.component';
import Work from './work/work.component';

const Resume = () => {
  return (
    <section className="resume" id="resume">
      <div className="wrapper">
        <Title />
        <div className="main">
          <Education />
          <Work />
        </div>
      </div>
    </section>
  );
};

export default Resume;
