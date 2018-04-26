import React , { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
import PatientView from './PatientView';

import green from '../images/green.png';
import red from '../images/red.png';
import yellow from '../images/yellow.png';
import '../styles/docs/assets/css/patient/dashboard/dashboard-styles.css';

class PatientTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const patients = this.props.patients;
    console.log(patients);
    return (
      <div class="dash-table table-responsive">
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
          {patients.map( (patient) => (
            <tbody>
              <tr>
                <td>
                  {/* value="Refresh Page" onClick="window.location.reload()" */}
                  <Link to={"/patient/"+`${patient.id}`} value="Refresh Page" onClick="window.location.reload()">
                    {patient.firstname} {patient.lastname}
                  </Link>
                  <Switch>
                    <Route path={"/patient/"+`${patient.id}`} render={() =>
                      <PatientView patients={patient}/>}/>
                  </Switch>


                </td>
                <td>
                  <img class="status-bubble" src={(() => {
                    switch (patient.statusrom) {
                      case "green":   return green;
                      case "yellow": return yellow;
                      case "red":  return red;
                      default:      return green;
                    }
                  })()} alt="ROM Status"/>
                </td>

                <td>
                  <img class="status-bubble" src={(() => {
                    switch (patient.statuspeg) {
                      case "green":   return green;
                      case "yellow": return yellow;
                      case "red":  return red;
                      default:      return green;
                    }
                  })()} alt="PEG Status"/>
                </td>

                <td>
                  <img class="status-bubble" src={(() => {
                    switch (patient.statusstrength) {
                      case "green":   return green;
                      case "yellow": return yellow;
                      case "red":  return red;
                      default:      return green;
                    }
                  })()} alt="Strength Status"/>
                </td>
                <td><span class="icon icon-typing"></span></td>
                <td>{patient.patienttype}</td>
                <td>{patient.nextapt} </td>
              </tr>
            </tbody>
          ))}
        </table>

      </div>
    )
  }
}

export default PatientTable;
