import React from 'react';
import SectionTitle from '../title-section/title-section.component';
import ContactForm from './form/form.component';
import Info from './info/info.component';
import './contact.styles.scss';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrapper">
        <SectionTitle
          firstPart="Get In"
          secondPart="Touch"
          description="Feel Free To Contact Me Any Time."
        />
        <div className="contact-wrap">
          <ContactForm />
          <Info />
        </div>
      </div>
    </section>
  );
};

export default Contact;
