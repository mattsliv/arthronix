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

import 'styles/docs/assets/css/toolkit-inverse.css';
import 'styles/docs/assets/css/application.css';
import 'styles/docs/assets/css/docs.css';
import 'styles/docs/assets/css/styles.css';


var JSONPretty = require('react-json-pretty');

class Patients extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    const patients = this.props.patients;
    return(
      <div>
        <h1>Patients</h1>
        <h3>
          {patients.map(patient =>
            <div key={patient.id}>{patient.id} : {patient.firstname} {patient.lastname}</div>)}
        </h3>
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {users: []}
  }

  componentWillMount() {
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
                <a className="navbar-brand">
                  <Link to="/" activeClassName="active">Arthronix</Link>
                </a>
              </div>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li><Link to="/patients" activeClassName="active"><a href="#" class="btn btn-outline-primary px-3"><span class="icon icon-users"></span> Patients</a></Link></li>
                  <li><Link to="/patient" activeClassName="active"><a href="#" class="btn btn-outline-primary px-3"><span class="icon icon-user"></span> Patient</a></Link></li>
                  <li><Link to="/library" activeClassName="active"><a href="#" class="btn btn-outline-primary px-3"><span class="icon icon-video"></span> Library</a></Link></li>
                  <li><Link to="/community" activeClassName="active"><a href="#" class="btn btn-outline-primary px-3"><span class="icon icon-typing"></span> Community</a></Link></li>
                </ul>
              </div>
            </div>
          </nav>

          <hr/>

          <Switch>
            <Route exact path="/" render={() => <Patients patients={this.state.users}/>}/>
            <Route path="/patients" render={() => <PatientDash patients={this.state.users}/>}/>
            <Route path="/patient" render={() => <PatientView patients={this.state.users}/>}/>
            <Route path="/library" component={Library}/>
            <Route path="/community" component={Community}/>
          </Switch>

          <JSONPretty id="json-pretty" json={this.state.users}></JSONPretty>
        </div>
      </Router>
    )
  }
}

export default App
