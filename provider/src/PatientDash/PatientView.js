import React , { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class PatientBundle extends Component {

}

class PatientStats extends Component {

}

class PatientPage extends Component {
  render() {
    const patient = this.props.patient

    return (
      <body>
        Welcome!
        <table>
          <tr>
            <td>{patient.name}</td>
          </tr>
        </table>
        <PatientBundle patients={patient}/>
        <PatientStats patients={patient}/>s
      </body>
    )
  }
}

export default PatientPage
