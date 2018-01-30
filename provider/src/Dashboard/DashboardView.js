import React , { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import PatientPage from '../PatientPage/'

// Allows switch into patient info from the dashboard
// class ModalSwitch extends Component {
  // Credit: https://reacttraining.com/react-router/web/example/modal-gallery
  // previousLocation = this.props.location
  //
  // componentWillUpdate(nextProps) {
  //   const { location } = this.props
  //   // set previousLocation if props.location is not modal
  //   if (
  //     nextProps.history.action !== 'POP' &&
  //     (!location.state || !location.state.modal)
  //   ) {
  //     this.previousLocation = this.props.location
  //   }
  // }
  //
  // render() {
  //   const { location } = this.props
  //   const isModal = !!(
  //     location.state &&
  //     location.state.modal &&
  //     this.previousLocation !== location // not initial render
  //   )
    // return (
    //   <div>
    //     <Switch location={isModal ? this.previousLocation : location}>
    //       <Route path='/patients' component={PatientTable}/>
    //       <Route path='/patients/patientName' render={(routeProps) =>
    //         (<PatientView patients={this.props.patients}/>)} />
    //     </Switch>
    //     {isModal ? <Route path='/img/:id' component={Modal} /> : null}
    //   </div>
    // )
//   }
// }

class PatientRow extends Component {
  render() {
    // Render patient info
    const patient = this.props.patient
    const msgStatus = this.props.patient.messages
    var msg = ''
    if (msgStatus === true) {
      msg = "New message!"
    }

    return (
      <tr>
        <td><Link to="/patientName">{patient.name}</Link></td>
        <td>{patient.status}</td>
        <td>{msg}</td>
        <td>{patient.type}</td>
        <td>{patient.appointment}</td>
        <Switch>
          <Route path="/patientName" render={(routeProps) =>
            (<PatientPage patients={this.props.patients}/>)} />
        </Switch>
      </tr>
    )
  }
}

class PatientTable extends Component {
  render() {
    const rows = [];

    this.props.patients.forEach((patient) => {
      rows.push(
        <PatientRow
          patient={patient}
          key={patient.name}/>
      )
    })

    return (
      <table cellpadding="5" cellspacing="5">
        <thead>
          Patient Dashboard
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
