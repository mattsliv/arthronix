import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class PatientRow extends React.Component {
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

class PatientTable extends React.Component {
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

class Header extends React.Component {
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

class ProviderNav extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <PatientTable patients={this.props.patients}/>
      </div>
    )
  }
}

const PATIENTS = [
  {name: 'Shemona Singh', status: 'green', messages: true, type: 'Knee', appointment: 'October 7th, 9am'},
  {name: 'Chris Stumper', status: 'yellow', messages: false, type: 'Hip', appointment: 'November 4th, 1pm'},
  {name: 'Matthew Slivinski', status: 'red', messages: true, type: 'Knee', appointment: 'October 1st, 9:30am'},
  {name: 'Elaine Tsun', status: 'green', messages: false, type: 'Hip', appointment: 'December 16th, 12pm'},
  {name: 'Savanna Smith', status: 'yellow', messages: true, type: 'Knee', appointment: 'November 8th, 3pm'}
];

ReactDOM.render(
  <ProviderNav patients={PATIENTS} />,
  document.getElementById('root')
);
