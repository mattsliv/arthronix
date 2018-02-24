import React , { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import PatientView from './PatientView'

// class UserID extends Component {
//   render() {
//     return(
//       <div>
//         <h2>{this.props.match.params.patient.id}</h2>
//       </div>
//     )
//   }
// }

class PatientRow extends Component {
  render() {
    if (this.props.patient.messages === true) {
      var msg = "New message!"
    }

    return (
      <Router>
        <tr>
          {/*  FIX: need dynamic path */}
          <td><Link to="/patients/${:id}">{this.props.patient.name}</Link></td>
          <td>{this.props.patient.status}</td>
          <td>{msg}</td>
          <td>{this.props.patient.type}</td>
          <td>{this.props.patient.appointment}</td>
        </tr>
        {/* <Switch>
          <Route path="/patients/:id" render={() => <UserID patient={patient}/>}/>
        </Switch> */}
      </Router>
    )
  }
}

class PatientTable extends Component {
  render() {
    // console.log(this.props.patients);

    const rows = []

    this.props.patients.forEach((patient) => {
      rows.push(
        <PatientRow key={patient.id} patient={patient}/>
      )
    })

    return (
      <div class="panel panel-default">
        {/* <div class="panel-heading"></div> */}
        <table class="table">
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
      </div>
    )
  }
}

export default PatientTable;
