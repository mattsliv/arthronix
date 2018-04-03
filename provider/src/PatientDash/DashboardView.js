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
    var rand = Math.floor((Math.random() * 3) + 1);
    let row = '';
    const patient = this.patient;

    if (rand == 1) {
      row = (
        <tr>
          <td>Matt</td>
          <td><img src={green} alt="green"/></td>
          <td><span class="icon icon-typing"></span></td>
          <td>Knee</td>
          <td>01/01/2015</td>
        </tr>
      )
    }
    else if (rand == 2) {
      row = (
        <tr>
          <td>Chris</td>
          <td><img src={yellow} alt="yellow"/></td>
          <td><span class="icon icon-typing"></span></td>
          <td>Knee</td>
          <td>01/01/2015</td>
        </tr>
      )
    }
    else {
      row = (
        <tr>
          <td>Sav</td>
          <td><img src={red} alt="red"/></td>
          <td><span class="icon icon-typing"></span></td>
          <td>Knee</td>
          <td>01/01/2015</td>
        </tr>
      )
    }

    return (
      <Router>
        {row}
        {/* <tr> */}
        {/*  FIX: need dynamic path */}
        {/* <td><Link to="/patients/${:id}">{this.props.patient.name}</Link></td>
          <td>{this.props.patient.status}</td>
          <td>{msg}</td>
          <td>{this.props.patient.type}</td>
          <td>{this.props.patient.appointment}</td>
        {/* </tr> */}
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
              <th>Status</th>
              <th>Messages</th>
              <th>Type</th>
              <th>Next Appointment</th>
            </tr>
          </thead>
          <tbody class="dash-table">
            <tr>
              <td>Elaine Tsun</td>
              <td><img src={green} alt="green"/></td>
              <td><span class="icon icon-typing"></span></td>
              <td>Knee</td>
              <td>01/01/2015</td>
            </tr>
            <tr>
              <td>Chris Stumper</td>
              <td><img src={yellow} alt="yellow"/></td>
              <td><span class="icon icon-green icon-typing"></span></td>
              <td>Hip</td>
              <td>01/12/2015</td>
            </tr>
            <tr>
              <td>Shemona Singh</td>
              <td><img src={red} alt="red"/></td>
              <td><span class="icon icon-typing"></span></td>
              <td>Knee</td>
              <td>02/05/2015</td>
            </tr>
            <tr>
              <td>Savanna Smith</td>
              <td><img src={green} alt="green"/></td>
              <td><span class="icon icon-green icon-typing"></span></td>
              <td>Knee</td>
              <td>01/22/2015</td>
            </tr>
            <tr>
              <td>Matt Slivinski</td>
              <td><img src={green} alt="green"/></td>
              <td><span class="icon icon-green icon-typing"></span></td>
              <td>Hip</td>
              <td>02/02/2015</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default PatientTable;
