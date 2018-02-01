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
      <h1>My Workout Streak</h1>
      <div className="days-app">
        <p><span>128</span> Days</p>
        <p>Next Appointment</p>
      </div>
    <Footer/>
  </div>,


  document.getElementById('root'));

registerServiceWorker();
