// import '../styles/docs/assets/css/toolkit-inverse.css';
// import '../styles/docs/assets/css/application.css';
// import '../../node_modules/chart.js/Chart.js';
// import '../../node_modules/chart.js/Chart.min.js'

import React , { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import green from '../images/green.png';
import red from '../images/red.png';
import yellow from '../images/yellow.png';

// import Charts from './Charts';
import Charts2 from './Charts2';
var JSONPretty = require('react-json-pretty');

// import '../styles/docs/assets/js/popper.min.js';
// import '../styles/docs/assets/js/chart.js';
// import '../styles/docs/assets/js/tablesorter.min.js';
// import '../styles/docs/assets/js/toolkit.js';
// import '../styles/docs/assets/js/application.js';


class PatientBundle extends Component {
  render() {
    return(

      <div>

        <div class="hr-divider my-4">
          <h3 class="hr-divider-content hr-divider-heading">Quick stats</h3>
        </div>

        <div class="averages row statcards mt-3 mb-3 text-xs-center text-md-left">
          <div class="col-6 col-md-3 statcard mb-4">
            <h3 class="statcard-number text-success">
              6
              <small class="delta-indicator delta-positive">5%</small>
            </h3>
            <span class="statcard-desc">Average PEG</span>
          </div>
          <div class="col-6 col-md-3 statcard mb-4">
            <h3 class="statcard-number text-danger">
              160
              <small class="delta-indicator delta-negative">1.3%</small>
            </h3>
            <span class="statcard-desc">Average ROM</span>
          </div>

          <table id="myTable" class="table" data-sort="table">
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
        {/* insert chart here */}




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
                'rgb(114, 71, 255)',
                'rgb(114, 71, 255)',
                'rgb(114, 71, 255)',
                'rgb(114, 71, 255)',
                'rgb(114, 71, 255)',
                'rgb(114, 71, 255)',
                'rgb(114, 71, 255)',
                'rgb(114, 71, 255)',
                'rgb(114, 71, 255)'
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
                'rgba(57, 172, 255, 1)',
                'rgba(57, 172, 255, 1)',
                'rgba(57, 172, 255, 1)',
                'rgba(57, 172, 255, 1)',
                'rgba(57, 172, 255, 1)',
                'rgba(57, 172, 255, 1)',
                'rgba(57, 172, 255, 1)',
                'rgba(57, 172, 255, 1)',
                'rgba(57, 172, 255, 1)'

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
                'rgb(114, 71, 255)',
                'rgb(114, 71, 255)',
                'rgb(114, 71, 255)',
                'rgb(114, 71, 255)',
                'rgb(114, 71, 255)',
                'rgb(114, 71, 255)',
                'rgb(114, 71, 255)',
                'rgb(114, 71, 255)',
                'rgb(114, 71, 255)',
                'rgb(114, 71, 255)',
                'rgb(114, 71, 255)',
                'rgb(114, 71, 255)',
                'rgb(114, 71, 255)',
                'rgb(114, 71, 255)'
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
                'rgba(57, 172, 255, 1)',
                'rgba(57, 172, 255, 1)',
                'rgba(57, 172, 255, 1)',
                'rgba(57, 172, 255, 1)',
                'rgba(57, 172, 255, 1)',
                'rgba(57, 172, 255, 1)',
                'rgba(57, 172, 255, 1)',
                'rgba(57, 172, 255, 1)',
                'rgba(57, 172, 255, 1)',
                'rgba(57, 172, 255, 1)',
                'rgba(57, 172, 255, 1)',
                'rgba(57, 172, 255, 1)',
                'rgba(57, 172, 255, 1)',
                'rgba(57, 172, 255, 1)'

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
      <table class="patient-main">
        <tr padding="15px">
          <td><h2>Elaine Tsun</h2></td>
          <td><img src={green} alt="green" width="25px"/></td>
        </tr>
        <tr>
          <h3><a href="#">Messages <span class="badge">1</span></a></h3>
        </tr>
        <tr><h5>Knee</h5></tr>
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
          <PatientStats patient={this.props.patients}/>
          <PatientBundle patients={this.props.patients}/>
          <Charts2 chartData={this.state.chartWeekData} title="Patient PEG & ROM (Weekly)" legendPosition="bottom"/>
          <Charts2 chartData={this.state.chartMonthData} title="Patient PEG & ROM (Monthly)" legendPosition="bottom"/>
          {/* <Charts statsData={this.state.stats}/> */}

        </div>
      </Router>


    )
  }
}

export default PatientPage
