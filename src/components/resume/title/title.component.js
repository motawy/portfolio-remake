import React from 'react';
import './title.styles.scss';

const Title = () => {
  return (
    <div className="title">
      <h2>
        My <span>Resume</span>
      </h2>
      <p>
        I'm currently <span style={{ color: 'green' }}>Available</span> for
        hire.
      </p>
    </div>
  );
};

export default Title;
