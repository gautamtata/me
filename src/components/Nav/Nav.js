import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toElement as scrollToElement } from '@utils/scroll';

import './style.scss';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      isSticky: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.pageYOffset > this.nav.offsetTop) {
      this.setState({
        isSticky: true
      });
    } else {
      this.setState({
        isSticky: false
      });
    }
  }

  scrollToPage(pageSelector) {
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }

  render() {
    const {
      theme: { colorPrimary, bgPrimary, navAlpha },
      switchTheme
    } = this.context;

    const stickyClass = this.state.isSticky ? 'sticky' : '';
    const stickyStyles = this.state.isSticky
      ? { backgroundColor: navAlpha, color: colorPrimary }
      : { backgroundColor: bgPrimary, color: colorPrimary };
    return (
      <nav
        className={stickyClass}
        ref={(elem) => {
          this.nav = elem;
        }}
        style={stickyStyles}
      >
        
        <style jsx="true">
          {`
            .menu__item:hover {
              border-bottom: 2px solid ${colorPrimary};
            }
          `}
        </style>
        <div className="menu">
        <a  style = {{color:'white'}}
            className="menu__item"
            href="mailto:gautamtata@gmail.com" 
            target="_top"
          >
            Contact Me
          </a>
        
          <a
            className="menu__item"
            onClick={(e) => this.scrollToPage('.portfolio-page')}
          >
            Projects
          </a>
          <a
            style = {{color:'white'}} 
            className="menu__item"
            href='https://drive.google.com/file/d/1W4vLLLcgDO407lluhZSU0VHCUXOQeSe2/view?usp=sharing'
          >
            Resume
          </a>
          <a 
            style = {{color:'white'}}
            className="menu__item"
            href='https://github.com/gautamtata'
          >
            Github
          </a>
        
        </div>
      </nav>
    );
  }
}

Nav.contextTypes = {
  theme: PropTypes.any,
  switchTheme: PropTypes.func
};

export default Nav;
