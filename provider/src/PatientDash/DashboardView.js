import React , { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import PatientView from './PatientView'

class PatientRow extends Component {

  render() {
    const patient = this.props.patient
    // const id = patient.id
    const msgStatus = this.props.patient.messages
    var msg = ''
    if (msgStatus === true) {
      msg = "New message!"

    }

    return (
      <Router>
        <div>
          <tr>
            {/*FIX: needs dynamic path  */}
            <td><Link to="/patients/patientName">{patient.name}</Link></td>
            <td>{patient.status}</td>
            <td>{msg}</td>
            <td>{patient.type}</td>
            <td>{patient.appointment}</td>
          </tr>
          <Switch>
            <Route
              path="/patients/patientName"
              render={(routeProps) =>
                (<PatientView
                  patient={patient}
                />)
              }
            />
          </Switch>
        </div>
      </Router>
    )
  }
}

class PatientTable extends Component {
  render() {
    const patients = this.props.patients
    const rows = [];
    var patient;

    for (var i = 0; i < patients.length; i++){
      patient = patients[i];
      rows.push(
        <PatientRow
          patient={patient}
          key={patient.name}/>
      )
    }

    // patients.forEach((patient) => {
    //   rows.push(
    //     <PatientRow
    //       patient={patient}
    //       key={patient.name}/>
    //   )
    // })

    return (
      <table cellpadding="5" cellspacing="5">
        <thead>
          <tr>
            <th><a href="" scope="col">Name</a></th>
            <th><a href="" scope="col">Status</a></th>
            <th><a href="" scope="col">Messages</a></th>
            <th><a href="" scope="col">Type</a></th>
            <th><a href="" scope="col">Next Appointment</a></th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}

export default PatientTable;
