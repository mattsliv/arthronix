import React , { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Charts from '../charts/'

class PatientBundle extends Component {

}

class PatientStats extends Component {

}

class PatientPage extends Component {
  render() {
    const patient = this.props.patient

    return (
      <div>
        <h1>Patient Page</h1>
        <table>
          <tr padding="15px">
            <td><h3>{patient.name}</h3></td>
            <td><h5><span class="label label-success">{patient.status}  </span>
              <a href="#">Messages <span class="badge">1</span></a></h5></td>
          </tr>
          <tr><h5>{patient.type}</h5></tr>
        </table>
        <div class="btn-group">
          <button type="button" class="btn btn-default">+ Add new data</button>
        </div>
        <div>
          {/* <Charts /> */}
        </div>
      </div>

    )
  }
}

export default PatientPage
