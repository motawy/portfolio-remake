import React from 'react';
import * as $ from 'jquery';

import './burger-menu.styles.scss';
import Menu from './menu.component';

const BurgerMenu = () => {
  const handleClick = () => {
    if ($('.menu').css('visibility') === 'hidden') {
      $('.menu').css('visibility', 'visible');
      $('.menu').css('opacity', '1');
    }

    $('.close_btn').click(() => {
      $('.menu').css('visibility', 'hidden');
      $('.menu').css('opacity', '0');
    });

    $('.nav a').click(() => {
      $('.menu').css('visibility', 'hidden');
      $('.menu').css('opacity', '0');
    });
  };

  return (
    <div>
      <div className="burger-menu" id="burger-menu" onClick={handleClick}>
        <span></span>
      </div>
      <Menu />
    </div>
  );
};

export default BurgerMenu;
