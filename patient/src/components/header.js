import React, { Component } from 'react';
import logo from '../images/logo.png';
import settings from '../images/settings.png';
import header from './header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <img src={logo} alt="logo" className="logo"/>
        <img src={settings} alt="settings" className="settings"/>
      </header>
    );
  }
}

export default Header;
