import React from 'react';
import PropTypes from 'prop-types';
import SocialIcons from '@components/SocialIcons';
import Nav from '@components/Nav';
import ScrollToNext from '@components/ScrollToNext';
import { toElement as scrollToElement } from '@utils/scroll'
import BrowserNotes from '@components/BrowserNotes';

import ProfilePic from '../../gautam-profile.jpg'

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

          <img className="profile-pic" src={ProfilePic}></img>

          <div className= "intro-name"> 
          <div className="tagline">
          <b style = {{color: 'yellow', fontSize: 32}}>Full Stack Developer</b>
           <br />
          <p>I’ve built <b>live</b>, <b>working</b> applications, that <b>have users</b>, for both clients and for fun. <a onClick={(e) => scrollToPage('.portfolio-page')}>Check them out below.</a></p>
          <p>I'm most proud of <a href="http://www.logic-checker.gautamtata.com"><b>Logic Checker</b></a>: an application that saves teaching assistants hours on grading.</p>
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
