import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/pro-light-svg-icons/faPlus';
import './form.styles.scss';

const ContactForm = () => {
  return (
    <div className="contact-form">
      <div className="form-title">
        <span>How can I help you ?</span>
      </div>
      <div className="form-subtitle">
        <span>Fill out this form we'll contact back shortly.</span>
      </div>
      <div className="form">
        <form name="contact" method="POST">
          <input type="hidden" name="form-name" value="contact" />
          <label htmlFor="name">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Type your name"
            />
          </label>

          <label htmlFor="email">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Type your email"
            />
          </label>

          <label htmlFor="message">
            <textarea
              name="message"
              id="message"
              placeholder="Type your messages"
            ></textarea>
          </label>
          <div className="btn__send">
            <button type="submit" id="btn_submit">
              <FontAwesomeIcon icon={faPlus} size="lg" />
              <span> Send</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
