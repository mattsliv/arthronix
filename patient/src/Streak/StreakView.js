import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './containers/App.js';
import registerServiceWorker from './registerServiceWorker';
import Header from './components/header.js';
import Footer from './components/footer.js';

ReactDOM.render(

  <div>
    <Header/>
      <div className="days-app">
        <section>
          <h1>My Workout Streak</h1>
          <p className="days"><span>128</span> Days</p>
        </section>
        <section>
          <p className="app">Next Appointment</p>
          <time>October 23rd - 9am</time>
        </section>
        <section className="progress">
          <p className="app">Week 3 Bundle</p>
          <ul className="days-of-week">
            <li>M</li>
            <li>T</li>
            <li>W</li>
            <li>TH</li>
            <li>F</li>
          </ul>
        </section>
      </div>
    <Footer/>
  </div>,


  document.getElementById('root'));

registerServiceWorker();
