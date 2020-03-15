import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Social = ({link, title, icon, size}) => {
  return (
    <>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          title={title}
          href={link}
        >
          <FontAwesomeIcon icon={['fab', icon]} size={size} />
        </a>
      </li>
    </>
  );
};

export default Social;
