import React from 'react';
import PropTypes from 'prop-types';
import ScrollToPrevious from '@components/ScrollToPrevious';
import './style.scss';

const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="about-page" style={{ backgroundColor: bgPrimary }}>
      
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>About</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: '#000000' }}>
            
            <p>


            <h3 style={{ color: colorPrimary }}>
            Welcome to my website/portfolio. I'm a student studying at California state university at Monterey Bay with 
            a major in Computer Science. I'm passionate about building products that are geared towards the end user. 

            <br />
            <br />
            I like to create technology that is simplistic and extremely easy to use.
            <br />
            <br />
            A JavaScript fanboy, I love using the JavaScript stack as my <em> mains</em> but in the end I'm just someone who would use 
            whatever technology/language is needed to ship a product out.
            <br />
            <br />
            Languages/Frameworks/Libraries I love using: <bold style = {{color: 'black'}}>JS -> React,Redux,MongoDB,Node + Python + GraphQL + Material-UI.</bold>
            <br />
            <br />
            Stuff I'm fascinated by/stuff I'm currently learning: <bold style = {{color: 'black'}}>Docker, Tensorflow.js, ML5.js, Kubernetes</bold>
            <br />
            <br />
            <bold style = {{color: 'black'}}>I'm also a self procured environmentalist, hippie and coffee enthusiast! I love meeting new people and would be happy to meet for coffee as well! </bold>
            <br />
            <br />


            </h3>
              
            </p>
            <p className="text-emoji" style={{ color: colorPrimary }}>
           <div className = "react1">
            <i class="fab fa-react fa-5x"></i>
            </div>
            <br />
            <div className = "sass1" href = '/'>
            <i class="fab fa-sass fa-5x"></i>
            </div>
            </p>
          </div>
        </div>
      </div>
      <ScrollToPrevious pageSelector=".portfolio-page" />
    </div>
  );
};

AboutPage.contextTypes = {
  theme: PropTypes.any
};

export default AboutPage;
