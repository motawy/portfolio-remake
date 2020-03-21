import React from 'react';
import Header from './components/header/header.component';
import Page from './components/page/page.component';
import * as $ from 'jquery';
import './loader';

function App() {
  $(document).ready(function() {
    $('a[href*="#"]').on('click', function(e) {
      var anchor = $(this);
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop: $(anchor.attr('href')).offset().top
          },
          1000
        );
      e.preventDefault();
      return false;
    });
  });
  return (
    <div className="App">
      <Header />
      <Page />
    </div>
  );
}

export default App;
