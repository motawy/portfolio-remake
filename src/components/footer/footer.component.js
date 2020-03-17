import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons/faReact';
import './footer.styles.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <span>
        &copy; 2020 Mido. Made with <FontAwesomeIcon icon={faReact} size="lg" />
      </span>
    </footer>
  );
};

export default Footer;
