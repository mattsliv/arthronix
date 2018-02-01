import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch } from 'react-router-dom'
import PatientDash from '../PatientDash/'

class NavigationView extends Component {
  render() {
    return(
      <Router>
        <table>
          <thead>
            <tr>
              <th>Arthronix</th>
              <th><Link to="/patients">Patients</Link></th>
              <th><Link to="/library">Library</Link></th>
              <th><Link to="/community">Community</Link></th>
            </tr>
          </thead>
          <tbody></tbody>
          <Switch>
            <Route path="/" render={() =>
              (<PatientDash patients={this.props.patients}/>)}
            />
          </Switch>

          {/* <Route path="/library" component={About}/>
          <Route path="/community" component={Topics}/> */}
        </table>
      </Router>
    );
  }
}

export default NavigationView
