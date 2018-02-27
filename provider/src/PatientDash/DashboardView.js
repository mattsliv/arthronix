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

class PatientRow extends Component {
  render() {
    const patient = this.props.patient
    var msg = ''
    if (patient.messages === true) {
      msg = "New message!"
    }

    return (
      <Router>
        <tr>
          {/*  FIX: need dynamic path */}
          {/* <td><Link to="/patients/${:id}">{patient.name}</Link></td> */}
          <td>{patient.status}</td>
          <td>{msg}</td>
          <td>{patient.type}</td>
          <td>{patient.appointment}</td>
        </tr>
        {/* <Switch>
          <Route path="/patients/:id" render={() => <UserID patient={patient}/>}/>
        </Switch> */}
      </Router>
    )
  }
}


class PatientTable extends Component {

  constructor(props) {
    super(props)
    // this.state = {patients: []}
  }
  render() {
    const patients = this.props.patients;
    const rows = []

    patients.forEach((patient) => {
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
              <th>Status</th>
              <th>Messages</th>
              <th>Type</th>
              <th>Next Appointment</th>
            </tr>
          </thead>
          <tbody class="dash-table">
            <tr>
              <td>Abby Clayton</td>
              <td><img src={green} alt="green"/></td>
              <td><span class="icon icon-typing"></span></td>
              <td>Knee</td>
              <td>01/01/2015</td>
            </tr>
            <tr>
              <td>Christopher Hanson</td>
              <td><img src={yellow} alt="yellow"/></td>
              <td><span class="icon icon-green icon-typing"></span></td>
              <td>Hip</td>
              <td>01/01/2015</td>
            </tr>
            <tr>
              <td>David Castillo</td>
              <td><img src={red} alt="red"/></td>
              <td><span class="icon icon-typing"></span></td>
              <td>Knee</td>
              <td>01/01/2015</td>
            </tr>
            <tr>
              <td>Marilyn Peters</td>
              <td><img src={green} alt="green"/></td>
              <td><span class="icon icon-green icon-typing"></span></td>
              <td>Knee</td>
              <td>01/02/2015</td>
            </tr>
            <tr>
              <td>Rebecca Dean</td>
              <td><img src={green} alt="green"/></td>
              <td><span class="icon icon-green icon-typing"></span></td>
              <td>Hip</td>
              <td>01/02/2015</td>
            </tr>
          </tbody>
        </table>
      </div>

    )
  }
}

export default PatientTable;
