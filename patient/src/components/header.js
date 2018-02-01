import React, { Component } from 'react';
import logo from '../images/logo.png';
import settings from '../images/settings.png';
import header from './header.css';

class Header extends Component {
  render() {
    return (

         //<head>
            //<title>My Workout Streak</title>
            //<link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,500" rel="stylesheet" />
         //</head>

          <header>
            <img src={logo} alt="logo" className="logo"/>
            <img src={settings} alt="settings" className="settings"/>
          </header>
    );
  }
}

export default Header;
