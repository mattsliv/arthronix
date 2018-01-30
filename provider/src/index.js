import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation/';
import registerServiceWorker from './registerServiceWorker';

// Static data for now
const PATIENTS = [
  {name: 'Shemona Singh', status: 'green', messages: true, type: 'Knee', appointment: 'October 7th, 9am'},
  {name: 'Chris Stumper', status: 'yellow', messages: false, type: 'Hip', appointment: 'November 4th, 1pm'},
  {name: 'Matthew Slivinski', status: 'red', messages: true, type: 'Knee', appointment: 'October 1st, 9:30am'},
  {name: 'Elaine Tsun', status: 'green', messages: false, type: 'Hip', appointment: 'December 16th, 12pm'},
  {name: 'Savanna Smith', status: 'yellow', messages: true, type: 'Knee', appointment: 'November 8th, 3pm'}
];

// Render app to DOM
ReactDOM.render(
  <Navigation patients={PATIENTS} />,
  document.getElementById('root'));

// Service worker for cache speedup
registerServiceWorker();
