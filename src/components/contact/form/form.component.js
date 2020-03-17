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
        <form name="mido-form" method="POST" data-netlify-recaptcha="true" data-netlify="true">
          <div className="form-name">
            <input
              type="text"
              id="name"
              name="mido-name"
              placeholder="Type your name"
            />
          </div>

          <div className="form-email">
            <input
              type="email"
              id="email"
              name="mido-email"
              placeholder="Type your email"
            />
          </div>

          <div className="form-textarea">
            <textarea
              name="mido-text_comment"
              id="text_comment"
              placeholder="Type your messages"
            />
          </div>
          <div data-netlify-recaptcha="true"></div>
          <div className="btn__send">
            <button type="submit" id="btn_submit" name="mido-submit">
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
