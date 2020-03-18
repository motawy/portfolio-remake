import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/pro-solid-svg-icons/faPlus';
import './element.styles.scss';

const Element = ({ link, imageWebp, image, title }) => {
  return (
    <div className="element-container">
      <div className="element-card">
        <a href={link} className="onHover">
          <div className="img">
            <picture>
              <source srcset={imageWebp} type="image/webp" />
              <img src={image} alt="work" />
            </picture>
          </div>
          <div className="details-wrap">
            <div className="details">
              <div className="details-title">
                <span>{title}</span>
              </div>
              <div className="details-btn">
                <FontAwesomeIcon icon={faPlus} color="#f2d367" />
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Element;
