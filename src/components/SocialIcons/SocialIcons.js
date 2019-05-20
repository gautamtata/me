import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const SocialIcons = (props, context) => {
  const { theme: { colorPrimary } } = context;
  
  return (
    <div className="social-icons ">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/gautamtata" style={ { color: colorPrimary } }><i className="fab fa-github"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/users/10318523/gatata" style={ { color: colorPrimary } }><i className="fab fa-stack-overflow"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/gautam-tata-b91b20118/" style={ { color: colorPrimary } }><i className="fab fa-linkedin"></i></a>
       <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@gautamtata" style={ { color: colorPrimary } }><i className="fab fa-medium"></i></a>
      
      </div>
  );
};

SocialIcons.contextTypes = {
  theme: PropTypes.any
};

export default SocialIcons;
