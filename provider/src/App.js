import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch } from 'react-router-dom'

import PatientDash from './PatientDash/'
import Library from './Library/'
import CreateBundle from './Library/CreateBundleView'
import Community from './Community'
import PatientView from './PatientDash/PatientView'

// var JSONPretty = require('react-json-pretty');

class Users extends Component {
  render(){
    return(
      <div>
        <h1>Users</h1>
        <h3>
          {this.props.patients.map(user =>
            <div key={user.id}>{user.id} : {user.name}</div>)}
        </h3>
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {users: []}
  }

  componentWillMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  // componentWillReceiverProps(prevProps) {
  //   // only update patient data if it has changed
  //   if (prevProps.users !== this.state.users) {
  //     fetch('/users')
  //       .then(res => res.json())
  //       .then(users => this.setState({ users }));
  //   }
  // }

  render() {
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
                  <li><Link to="/createBundle" activeClassName="active">Create Bundle</Link></li>
                  <li><Link to="/community" activeClassName="active">Community</Link></li>
                </ul>
              </div>
            </div>
          </nav>
          <Switch>
            <Route exact path="/" render={() => <Users patients={this.state.users}/>}/>
            <Route path="/patients" render={() => <PatientDash patients={this.state.users}/>}/>
            <Route path="/patient" render={() => <PatientView patients={this.state.users}/>}/>
            <Route path="/library" component={Library}/>
            <Route path="/createBundle" component={CreateBundle}/>
            <Route path="/community" component={Community}/>
          </Switch>

          {/* <JSONPretty id="json-pretty" json={this.state.users}></JSONPretty> */}
        </div>


      </Router>
    )
  }
}

export default App
