import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch } from 'react-router-dom'

import PatientDash from './PatientDash/'
import Library from './Library/'
import Community from './Community'

class App extends Component {
  state = {users: []}

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-default">
              <div className="container-fluid">
                  <div className="navbar-header">
                      <a className="navbar-brand" href="#">Arthronix</a>
                  </div>
                  <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                      <ul className="nav navbar-nav">
                          <li><Link to="/patients" activeClassName="active">Patients</Link></li>
                          <li><Link to="/library" activeClassName="active">Library</Link></li>
                          <li><Link to="/community" activeClassName="active">Community</Link></li>
                      </ul>
                  </div>
              </div>
          </nav>
          <Route path="/patients" component={PatientDash}/>
          <Route path="/library" component={Library}/>
          <Route path="/community" component={Community}/>

          <h1>Users</h1>
          {this.state.users.map(user =>
            <div key={user.id}>{user.name}</div>
          )}
        </div>
      </Router>

    )
  }
}

export default App
