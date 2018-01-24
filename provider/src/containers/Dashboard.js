import React , { Component } from 'react';

class PatientRow extends Component {
  render() {
    const patient = this.props.patient
    const msgStatus = this.props.patient.messages
    var msg = ''

    if (msgStatus === true) {
      msg = "New message!"
    }

    return (
      <tr>
        <td><a href="">{patient.name}</a></td>
        <td>{patient.status}</td>
        <td>{msg}</td>
        <td>{patient.type}</td>
        <td>{patient.appointment}</td>
      </tr>
    );
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
      );
    });

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
    );
  }
}

class Header extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th><a href="">Patients</a></th>
            <th><a href="">Community</a></th>
            <th><a href="">Library</a></th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    );
  }
}

class ProviderNav extends Component {
  render() {
    return (
      <div>
        <Header />
        <PatientTable patients={this.props.patients}/>
      </div>
    )
  }
}

export default ProviderNav;
