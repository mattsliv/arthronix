import React , { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import green from '../images/green.png';
import red from '../images/red.png';
import yellow from '../images/yellow.png';
import Charts2 from './Charts2';
var JSONPretty = require('react-json-pretty');

class AddData extends Component {
  render() {
    return(
      <div>

      </div>
    )
  }
}

class PatientPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chartWeekData:{},
      chartMonthData:{}}
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
          <Charts2 chartData={this.state.chartWeekData} title="Patient PEG & ROM (Weekly)" legendPosition="bottom"/>
          <Charts2 chartData={this.state.chartMonthData} title="Patient PEG & ROM (Monthly)" legendPosition="bottom"/>
        </div>
      </Router>
    )
  }
}

export default PatientPage
