import React from 'react';
import PropTypes from 'prop-types';
import SocialIcons from '@components/SocialIcons';
import Nav from '@components/Nav';
import ScrollToNext from '@components/ScrollToNext';
import { toElement as scrollToElement } from '@utils/scroll'
import BrowserNotes from '@components/BrowserNotes';

import './style.scss';

function scrollToPage(pageSelector){
  const nextPage = document.querySelector(pageSelector);
  scrollToElement(nextPage);
}

const LandingPage = (props, context) => {
  
  const { theme: { bgPrimary, colorPrimary } } = context;

  return (
    <div style={{ backgroundColor: bgPrimary }} className="landing-page">
      <Nav />
      <main style={{ color: colorPrimary }}>
        <BrowserNotes />
        <div className="intro-wrapper">
          <br />
          <br />
          <div className="intro-name">GAUTAM TATA.</div>
            <div className= "intro-name"> 
          <div className="tagline">
          <b style = {{color: 'yellow', fontSize: 32}}>I'M A</b> Full Stack Developer | UI/UX enthusiast 
           <br />
           I've worked on a vareity of <a style = {{color: 'yellow', textDecoration: 'underline', cursor:'pointer'}}onClick={(e) => scrollToPage('.portfolio-page')}>projects</a> in teams and independently. I'm most proud of my <a style = {{color: 'yellow', textDecoration: 'underline',cursor:'pointer'}} href = 'https://js-annotated-maps.herokuapp.com/'>annotatable maps tool;</a>
           which you can easily use to generate custom maps based on lat-longs with a variety of other features making maps 
           highly customizable and interactive. <b> <a style = {{color:'yellow', textDecoration: 'underline',cursor:'pointer'}} href="mailto:gautamtata@gmail.com" 
            target="_top">Looking for exciting new opportunities.</a></b> 
          </div>
          
          <SocialIcons />
        </div>
       </div> 
      </main>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );

};

LandingPage.contextTypes = {
  theme: PropTypes.any
};

export default LandingPage;
