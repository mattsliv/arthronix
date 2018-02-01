import React, { Component } from 'react';
import home from '../images/home.png';
import bar from '../images/bar.png';
import tick from '../images/tick.png';
import chat from '../images/chat.png';
import footer from './footer.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <ul>
          <li className="footer-label">
            <img src={home} alt="home"/>
            <p>Home</p>
          </li>
          <li className="footer-label">
            <img src={bar} alt="bar"/>
            <p>Stats</p>
          </li>
          <li className="footer-label">
            <img src={tick} alt="tick"/>
            <p>Bundles</p>
          </li>
          <li className="footer-label">
            <img src={chat} alt="chat"/>
            <p>Chat</p>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
