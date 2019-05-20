import React from 'react';
import PropTypes from 'prop-types';

import './style';

const Footer = (props, context) => {
  const { theme: { colorPrimary, textPrimary } } = context;
  return (
    <footer>
      <div className="content-grid">
        <div style={{ color: textPrimary }}>Made by <a href="https://github.com/gautamtata" target="_blank" rel="noopener noreferrer" style={{ color: colorPrimary }}>Gautam Tata</a></div>
        <div>Template design by Dinesh Padiyan</div>
      </div>
    </footer>
  );
};

Footer.contextTypes = {
  theme: PropTypes.any,
  switchTheme: PropTypes.func
};

export default Footer;