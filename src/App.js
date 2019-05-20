import React, { Component } from 'react';
import LandingPage from '@pages/LandingPage';
import PortfolioPage from '@pages/PortfolioPage';
import ScrollTop from '@components/ScrollTop';
import ThemeSwitcher from '@components/ThemeSwitcher';
import Browser from '@components/Browser';
import './app.css';
class App extends Component {

  render() {
    return (
      <div className="dev-landing-page">
        <ThemeSwitcher>
          <Browser except firefox>
          </Browser>
          <LandingPage />
          <PortfolioPage />
          <ScrollTop />
          
        </ThemeSwitcher>
      </div>
    );
  }
}

export default App;
