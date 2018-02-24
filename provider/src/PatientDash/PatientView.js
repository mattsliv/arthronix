import React , { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// import Charts from './Charts'

class PatientBundle extends Component {
  render() {
    return(
      <div class="panel panel-info">
        <div class="panel-heading">
          <ul class="pager">
            <li>Bundles</li>
            <li><a href="#">Previous</a></li>
            <li><a href="#">Next</a></li>
          </ul>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th><a href="" scope="col">#</a></th>
              <th><a href="" scope="col">Name</a></th>
              <th><a href="" scope="col">Last Completed</a></th>
              <th><a href="" scope="col">Reps</a></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <th>Body weight squats</th>
              <th>1/2/18</th>
              <th>10 reps</th>
            </tr>
            <tr>
              <th>2</th>
              <th>Walking lunges</th>
              <th>1/1/18</th>
              <th>12 reps</th>
            </tr>
            <tr>
              <th>3</th>
              <th>Jumping jacks</th>
              <th>1/10/18</th>
              <th>8 reps</th>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

class AddData extends Component {
  render() {
    return(
      <div>

      </div>
    )
  }
}

class PatientStats extends Component {
  render(){
    return(
      // FIX: Render charts from Chart.js
      <div>
        {/* <img src={require('chart.png')} /> */}
        [Insert charts here]
      </div>
    )
  }
}

class PatientPage extends Component {

  render() {
    const patients = this.props.patients;
    // const patient = this.props.patients[0];

    console.log(patients);
    return (
      <div>
        <h1>Patient Page</h1>
        <table>
          <tr padding="15px">
            <td><h3>{this.props.patients[1].name}</h3></td>
            <td><h5><span class="label label-warning">{this.props.patients[1].status}</span>
              <a href="#">Messages <span class="badge">1</span></a></h5></td>
          </tr>
          <tr><h5>{this.props.patients[1].type}</h5></tr>
        </table>
        <div class="btn-group">
          <button type="button" class="btn btn-default">+ Add new data</button>
        </div>
        {/* <PatientStats patient={this.props.patients}/> */}
        {/* <PatientBundle patients={this.props.patients}/> */}
      </div>

    )
  }
}

export default PatientPage
