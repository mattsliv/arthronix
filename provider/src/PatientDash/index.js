/* Modules */
import React, { Component } from 'react';

/* Component */
import DashboardView from './DashboardView';

/* Main index.js file for PatientDash */
export default class extends Component {
  render() {
    return (
      <div>
        <h1>Patient Dashboard</h1>
        <DashboardView patients={this.props.patients}/>
      </div>
    )
  }
}
