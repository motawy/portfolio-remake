import React from 'react';
import Social from '../social/social.component';
import './social-links.styles.scss';

const SocialLinks = () => {
  return (
    <div className="social_links">
      <ul>
        <Social title="GitHub" link="https://github.com/motawy" icon='github-alt' size="lg" />
        <Social title="Twitter" link="https://twitter.com/mohammed_tawy" icon='twitter' size="lg" />
        <Social title="LinkedIn" link="https://www.linkedin.com/in/mohammed-tantawy" icon='linkedin' size="lg" />
        <Social title="Medium" link="https://www.medium.com/@mtantawy.mido" icon='medium-m' size="lg" />
      </ul>
      <span>Follow Me</span>
    </div>
  );
};

export default SocialLinks;
