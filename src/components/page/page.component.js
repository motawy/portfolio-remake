import React from 'react';
import Hero from '../hero/hero.component';
import About from '../about/about.component';
import './page.styles.scss';
import Resume from '../resume/resume.component';
import Services from '../services/services.component';

const Page = () => {
  return (
    <div className="hero-wrapper">
      <Hero />
      <About />
      <Resume />
      <Services />
    </div>
  );
};

export default Page;
