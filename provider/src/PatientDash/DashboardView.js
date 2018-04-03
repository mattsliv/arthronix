import React , { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'


import PatientView from './PatientView';
import green from '../images/green.png';
import red from '../images/red.png';
import yellow from '../images/yellow.png';




class PatientTable extends Component {
  constructor(props) {
    super(props)
    this.state = {users: []}
  }

  componentWillMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    // console.log(this.props.patients);
    const rows = []

    this.props.patients.forEach((patient) => {
      rows.push(
        <PatientRow key={patient.id} patient={patient}/>
      )
    })

    return (

      <div class="table-responsive">

        <table id="myTable" class="table" data-sort="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>ROM</th>
              <th>PEG</th>
              <th>Strength</th>
              <th>Messages</th>
              <th>Type</th>
              <th>Next Appointment</th>
            </tr>
          </thead>
          {this.state.users.map(user =>
            <tbody class="dash-table">
              <tr>
                <td>{user.firstname} {user.lastname}</td>
                <td>
                  <img src={(() => {
                    switch (user.statusrom) {
                      case "green":   return green;
                      case "yellow": return yellow;
                      case "red":  return red;
                      default:      return green;
                    }
                  })()} alt="ROM Status"/>
                </td>

                <td>
                  <img src={(() => {
                    switch (user.statuspeg) {
                      case "green":   return green;
                      case "yellow": return yellow;
                      case "red":  return red;
                      default:      return green;
                    }
                  })()} alt="PEG Status"/>
                </td>

                <td>
                  <img src={(() => {
                    switch (user.statusstrength) {
                      case "green":   return green;
                      case "yellow": return yellow;
                      case "red":  return red;
                      default:      return green;
                    }
                  })()} alt="Strength Status"/>
                </td>
                <td><span class="icon icon-typing"></span></td>
                <td>{user.patienttype}</td>
                <td>{user.nextapt}</td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    )
  }
}

export default PatientTable;
