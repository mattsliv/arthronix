import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Dashboard from '../Dashboard/'

// Shows current link from curser
const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => (
  // Credit: https://reacttraining.com/react-router/web/example/custom-link
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <div className={match ? 'active' : ''}>
      {match ? '> ' : ''}<Link to={to}>{label}</Link>
    </div>
  )}/>
)

export default class NavigationView extends Component {
  render() {
    return(
      <Router>
        <table>
          <thead>
            <tr>
              <th>Arthronix</th>
              <th><OldSchoolMenuLink to="/patients" label="Patients"/></th>
              <th><OldSchoolMenuLink to="/library" label="Library"/></th>
              <th><OldSchoolMenuLink to="/community" label="Community"/></th>
            </tr>
          </thead>
          <tbody></tbody>
          <Route path="/patients" render={(routeProps) =>
            (<Dashboard patients={this.props.patients}/>)} />
          {/* <Route path="/library" component={About}/>
          <Route path="/community" component={Topics}/> */}
        </table>
      </Router>
    );
  }
}
