import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch } from 'react-router-dom'

import PatientDash from './PatientDash/'
import Library from './Library/'
import Community from './Community'
import PatientView from './PatientDash/PatientView'

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

class Users extends Component {
  render(){
    const patients = this.props.patients

    return(
      <div>
        <h1>Users</h1>
        <h3>
          {patients.map(user => <div key={user.id}>{user.id} : {user.name}</div>)}
        </h3>
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {patients: PATIENTS}
  }

  // state = {users: []}

  // componentDidMount() {
  //   fetch('/users')
  //     .then(res => res.json())
  //     .then(users => this.setState({ users }));
  // }

  render() {
    const patients = PATIENTS

    return (
      <Router>
        <div>
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand">
                  <Link to="/" activeClassName="active">Arthronix</Link>
                </a>
              </div>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li><Link to="/patients" activeClassName="active">Patients</Link></li>
                  <li><Link to="/patient" activeClassName="active">Patient</Link></li>
                  <li><Link to="/library" activeClassName="active">Library</Link></li>
                  <li><Link to="/community" activeClassName="active">Community</Link></li>
                </ul>
              </div>
            </div>
          </nav>
          <Switch>
            <Route exact path="/" render={() => <Users patients={patients}/>}/>
            <Route path="/patients" render={() => <PatientDash patients={patients}/>}/>
            <Route path="/patient" render={() => <PatientView patient={patients[0]}/>}/>
            <Route path="/library" component={Library}/>
            <Route path="/community" component={Community}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
