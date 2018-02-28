import '../styles/docs/assets/css/toolkit-inverse.css';
import '../styles/docs/assets/css/application.css';

import React , { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Charts from './Charts'
import Charts2 from './Charts2'
var JSONPretty = require('react-json-pretty');

 // import '../styles/docs/assets/js/popper.min.js';
 // import '../styles/docs/assets/js/chart.js';
// import '../styles/docs/assets/js/tablesorter.min.js';
// import '../styles/docs/assets/js/toolkit.js';
// import '../styles/docs/assets/js/application.js';


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
        <div class="table-responsive">
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
        <div class="hr-divider my-4">
          <ul class="nav nav-pills hr-divider-content hr-divider-nav" role="tablist">
            <li class="nav-item" role="presentation">
              <a href="#sales" class="nav-link active" role="tab" data-toggle="tab" aria-controls="sales">Sales</a>
            </li>
            <li class="nav-item" role="presentation">
              <a href="#inventory" class="nav-link" role="tab" data-toggle="tab" aria-controls="inventory">Inventory</a>
            </li>
            <li class="nav-item" role="presentation">
              <a href="#profit" class="nav-link" role="tab" data-toggle="tab" aria-controls="profit">Profit</a>
            </li>
          </ul>
        </div>

        <div class="tab-content">
          <div role="tabpanel" class="tab-pane active" id="sales">
            <div class="ex-line-graphs">
               <canvas
                class="ex-line-graph"
                width="600" height="350"
                data-chart="line"
                data-dataset="[[2500, 3300, 2512, 2775, 2498, 3512, 2925, 4275, 3507, 3825, 3445, 3985]]"
                data-labels="['','Aug 29','','','Sept 5','','','Sept 12','','','Sept 19','']"
                data-dark="true">
              </canvas>
            </div>
          </div>

          <div role="tabpanel" class="tab-pane" id="inventory">
            <div class="ex-line-graphs">
              <canvas
                class="ex-line-graph"
                width="600" height="400"
                data-chart="bar"
                data-dark="true"
                data-labels="['August','September','October','November','December','January','February']"
                data-dataset="[[65, 59, 80, 81, 56, 55, 40], [28, 48, 40, 19, 86, 27, 90]]"
                data-dataset-options="[{label: 'First dataset'}, {label: 'Second dataset'}]">
              </canvas>
            </div>
          </div>

          <div role="tabpanel" class="tab-pane" id="profit">
            <div class="row ex-graphs text-center">
              <div class="col-sm-4 mb-4 mb-sm-0">
                <div class="w-3 mx-auto">
                  <canvas
                    class="ex-graph"
                    width="200" height="200"

                    data-chart="doughnut"
                    data-dataset="[230, 130]"
                    data-dataset-options="{ borderColor: '#252830', backgroundColor: ['#1ca8dd', '#1bc98e'] }"
                    data-labels="['Returning', 'New']">
                  </canvas>
                </div>
                <strong class="text-muted">Traffic</strong>
                <h3>New vs Returning</h3>
              </div>
              <div class="col-sm-4 mb-4 mb-sm-0">
                <div class="w-3 mx-auto">
                  <canvas
                    class="ex-graph"
                    width="200" height="200"
                    data-chart="doughnut"
                    data-dataset="[330,30]"
                    data-dataset-options="{ borderColor: '#252830', backgroundColor: ['#1ca8dd', '#1bc98e'] }"
                    data-labels="['Returning', 'New']">
                  </canvas>
                </div>
                <strong class="text-muted">Revenue</strong>
                <h3>New vs Recurring</h3>
              </div>
              <div class="col-sm-4 mb-4 mb-sm-0">
                <div class="w-3 mx-auto">
                  <canvas
                    class="ex-graph"
                    width="200" height="200"
                    data-chart="doughnut"
                    data-dataset="[100,260]"
                    data-dataset-options="{ borderColor: '#252830', backgroundColor: ['#1ca8dd', '#1bc98e'] }"
                    data-labels="['Referrals', 'Direct']">
                  </canvas>
                </div>
                <strong class="text-muted">Traffic</strong>
                <h3>Direct vs Referrals</h3>
              </div>
            </div>
          </div>
        </div>

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

//this should really all be in another file please
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
//end of chart data
}

  render() {
    const patients = this.props.patients;

    //we need to check whether we have the patient data before we try to access it.
    let readyPatient = '';
    if(patients[1]) {
       readyPatient = (
      <table class="patient-main">
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

          <Charts2 chartData={this.state.chartWeekData} title="Patient Statistics (Weekly)" legendPosition="bottom"/>
          <Charts2 chartData={this.state.chartMonthData} title="Patient Statistics (Monthly)" legendPosition="bottom"/>
          <Charts statsData={this.state.stats}/>
          <PatientStats patient={this.props.patients}/>
          <PatientBundle patients={this.props.patients}/>
        </div>
      </Router>


    )
  }
}

export default PatientPage
