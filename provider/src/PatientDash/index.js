import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import DashboardView from './DashboardView';

export default class extends Component {
  render() {
    const patients = this.props.patients

    return (
      <Router>
        <div>
          <h1>Patient Dashboard</h1>
          <DashboardView patients={patients}/>
        </div>
      </Router>
    )
  }
}
