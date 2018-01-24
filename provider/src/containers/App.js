import React, {Component} from 'react';
import Dashboard from 'Dashboard';
import './App.css';

const PATIENTS = [
  {name: 'Shemona Singh', status: 'green', messages: true, type: 'Knee', appointment: 'October 7th, 9am'},
  {name: 'Chris Stumper', status: 'yellow', messages: false, type: 'Hip', appointment: 'November 4th, 1pm'},
  {name: 'Matthew Slivinski', status: 'red', messages: true, type: 'Knee', appointment: 'October 1st, 9:30am'},
  {name: 'Elaine Tsun', status: 'green', messages: false, type: 'Hip', appointment: 'December 16th, 12pm'},
  {name: 'Savanna Smith', status: 'yellow', messages: true, type: 'Knee', appointment: 'November 8th, 3pm'}
];

class App extends Component {
  render() {
    return (
      <Dashboard patients={PATIENTS}/>
    )
  }
}

export default App;
