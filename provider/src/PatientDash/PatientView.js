import React , { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Charts from './Charts'
import Charts2 from './Charts2'
var JSONPretty = require('react-json-pretty');

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
  constructor(props) {
    super(props)
    this.state = {
      stats: [],
      chartWeekData:{},
      CahrtMonthData:{}}
  }

componentWillMount() {
  this.getChartWeekData();
  this.getChartMonthData();
  fetch('/stats')
    .then(res => res.json())
    .then(stats => this.setState({ stats }));

}

/* Retrieves Weekly charts */
getChartWeekData(){
  // Ajax calls here
  this.setState({
    chartWeekData:
      {
        labels:[
          "",
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          ""
        ],
        datasets:[
          {
            label: 'PEG',
            yAxisID: "y-axis-1",
            data:[
              0,
              4,6,8,10,9,7,5,
              0
            ],
            backgroundColor:[
              'rgba(64, 9, 199, 0.66)',
              'rgba(64, 9, 199, 0.66)',
              'rgba(64, 9, 199, 0.66)',
              'rgba(64, 9, 199, 0.66)',
              'rgba(64, 9, 199, 0.66)',
              'rgba(64, 9, 199, 0.66)',
              'rgba(64, 9, 199, 0.66)',
              'rgba(64, 9, 199, 0.66)',
              'rgba(64, 9, 199, 0.66)',
            ]
          },
          {
            label: 'ROM',
            yAxisID: "y-axis-2",
            data:[
              0,
              90,125,160,180,150,115,80,
              0
            ],
            backgroundColor:[
              'rgba(0, 113, 195, 0.67)',
              'rgba(0, 113, 195, 0.67)',
              'rgba(0, 113, 195, 0.67)',
              'rgba(0, 113, 195, 0.67)',
              'rgba(0, 113, 195, 0.67)',
              'rgba(0, 113, 195, 0.67)',
              'rgba(0, 113, 195, 0.67)',
              'rgba(0, 113, 195, 0.67)',
              'rgba(0, 113, 195, 0.67)',

            ]
          }
        ]
    }
  }
 )
}

/* Retrieves Monthly charts */
getChartMonthData(){
  // Ajax calls here
  this.setState({
    chartMonthData:
      {
        labels:[
          "",
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
          ""
        ],
        datasets:[
          {
            label: 'PEG',
            yAxisID: "y-axis-1",
            data:[
              0,
              1,2,4,6,8,10,10,9,7,5,3,1,
              0
            ],
            backgroundColor:[
              'rgba(64, 9, 199, 0.66)',
              'rgba(64, 9, 199, 0.66)',
              'rgba(64, 9, 199, 0.66)',
              'rgba(64, 9, 199, 0.66)',
              'rgba(64, 9, 199, 0.66)',
              'rgba(64, 9, 199, 0.66)',
              'rgba(64, 9, 199, 0.66)',
              'rgba(64, 9, 199, 0.66)',
              'rgba(64, 9, 199, 0.66)',
              'rgba(64, 9, 199, 0.66)',
              'rgba(64, 9, 199, 0.66)',
              'rgba(64, 9, 199, 0.66)',
              'rgba(64, 9, 199, 0.66)',
              'rgba(64, 9, 199, 0.66)',

            ]
          },
          {
            label: 'ROM',
            yAxisID: "y-axis-2",
            data:[
              0,
              25,40,80,120,150,180,180,145,115,75,40,15,
              0
            ],
            backgroundColor:[
              'rgba(0, 113, 195, 0.67)',
              'rgba(0, 113, 195, 0.67)',
              'rgba(0, 113, 195, 0.67)',
              'rgba(0, 113, 195, 0.67)',
              'rgba(0, 113, 195, 0.67)',
              'rgba(0, 113, 195, 0.67)',
              'rgba(0, 113, 195, 0.67)',
              'rgba(0, 113, 195, 0.67)',
              'rgba(0, 113, 195, 0.67)',
              'rgba(0, 113, 195, 0.67)',
              'rgba(0, 113, 195, 0.67)',
              'rgba(0, 113, 195, 0.67)',
              'rgba(0, 113, 195, 0.67)',
              'rgba(0, 113, 195, 0.67)',

            ]
          }
        ]
    }
  }
 )
}

  render() {
    const patients = this.props.patients;

    //we need to check whether we have the patient data before we try to access it.
    let readyPatient = '';
    if(patients[1]) {
       readyPatient = (
      <table>
        <tr padding="15px">
          <td><h3>{this.props.patients[1].name}</h3></td>
          <td><h5><span class="label label-warning">{this.props.patients[1].status}</span>
            <a href="#">Messages <span class="badge">1</span></a></h5></td>
        </tr>
        <tr><h5>{this.props.patients[1].type}</h5></tr>
      </table>
    )
    }
    return (
      <Router>
        <div>
          <h1>Patient Page</h1>
          {readyPatient}
          <div class="btn-group">
            <button type="button" class="btn btn-default">+ Add new data</button>
          </div>
          {/* <PatientStats patient={this.props.patients}/> */}
          {/* <PatientBundle patients={this.props.patients}/> */}

          <PatientStats patient={this.props.patients}/>
          <PatientBundle patients={this.props.patients}/>
          <Charts2 chartData={this.state.chartWeekData} title="Patient Statistics (Weekly)" legendPosition="bottom"/>
          <Charts2 chartData={this.state.chartMonthData} title="Patient Statistics (Monthly)" legendPosition="bottom"/>
          <Charts statsData={this.state.stats}/>

        </div>
      </Router>


    )
  }
}

export default PatientPage
