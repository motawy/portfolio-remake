import React from 'react';
import Hero from '../hero/hero.component';
import About from '../about/about.component';
import Resume from '../resume/resume.component';
import Services from '../services/services.component';
import Portfolio from '../portfolio/portfolio.component';
import Contact from '../contact/contact.component';
import './page.styles.scss';
import Footer from '../footer/footer.component';

const Page = () => {
  return (
    <div className="hero-wrapper">
      <Hero />
      <About />
      <Resume />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Page;
