import React, { Component } from 'react';
import DashboardView from './DashboardView';

export default class extends Component {
  render() {
    return (
      <DashboardView patients={this.props.patients}/>
    )
  }
}
