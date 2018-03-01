import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(<App/>, document.getElementById('root'));





/*

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

import App from './App'

// Static data
const PATIENTS = [
  {
    id: 0,
    name: 'Shemona Singh',
    status: 'green',
    messages: true,
    type: 'Knee',
    appointment: 'October 7th, 9am'
  },
  {
    id: 1,
    name: 'Chris Stumper',
    status: 'yellow',
    messages: false,
    type: 'Hip',
    appointment: 'November 4th, 1pm'
  },
  {
    id: 2,
    name: 'Matthew Slivinski',
    status: 'red',
    messages: true,
    type: 'Knee',
    appointment: 'October 1st, 9:30am'
  },
  {
    id: 3,
    name: 'Elaine Tsun',
    status: 'green',
    messages: false,
    type: 'Hip',
    appointment: 'December 16th, 12pm'
  },
  {
    id: 4,
    name: 'Savanna Smith',
    status: 'yellow',
    messages: true,
    type: 'Knee',
    appointment: 'November 8th, 3pm'
  }
]

// Render app to DOM
ReactDOM.render(
  <Router>
    <App patients={PATIENTS}/>
  </Router>,
   document.getElementById('root')
)

// Service worker for cache speedup
registerServiceWorker();

*/
