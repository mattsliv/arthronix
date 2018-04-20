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
import '../styles/docs/assets/css/patient/flickity.css';
import '../styles/docs/assets/css/patient/flickity.pkgd.js';
import '../styles/docs/assets/css/patient/patient-styles.css';


// import Charts from './Charts';
import Charts2 from './Charts2';
var JSONPretty = require('react-json-pretty');

class PatientBundle extends Component {
  render() {

    return(
      <div>

        <div class="gallery js-flickity">
          <div class="gallery-cell">
            <p>3/24/18</p>
            <h2>Name of Bundle</h2>
            <div>
            <input type="checkbox" id="coding" name="interest" value="coding" checked/>
            <label for="coding">Lunges (1-2 x 15-20)</label>
            </div>
            <div>
              <input type="checkbox" id="music" name="interest" value="music"/>
              <label for="music">Squats (1-2 x 15-20)</label>
            </div>
            <div>
              <input type="checkbox" id="music" name="interest" value="music"/>
              <label for="music">Jumping Jacks (1-2 x 15-20)</label>
            </div>
          </div>


          <div class="gallery-cell">
            <p>3/24/18</p>
            <h2>Name of Bundle</h2>
            <div>
            <input type="checkbox" id="coding" name="interest" value="coding" checked/>
            <label for="coding">Lunges (1-2 x 15-20)</label>
            </div>
            <div>
              <input type="checkbox" id="music" name="interest" value="music"/>
              <label for="music">Squats (1-2 x 15-20)</label>
            </div>
            <div>
              <input type="checkbox" id="music" name="interest" value="music"/>
              <label for="music">Jumping Jacks (1-2 x 15-20)</label>
            </div>
          </div>

          <div class="gallery-cell">
            <p>3/24/18</p>
            <h2>Name of Bundle</h2>
            <div>
            <input type="checkbox" id="coding" name="interest" value="coding" checked/>
            <label for="coding">Lunges (1-2 x 15-20)</label>
            </div>
            <div>
              <input type="checkbox" id="music" name="interest" value="music"/>
              <label for="music">Squats (1-2 x 15-20)</label>
            </div>
            <div>
              <input type="checkbox" id="music" name="interest" value="music"/>
              <label for="music">Jumping Jacks (1-2 x 15-20)</label>
            </div>
          </div>

          <div class="gallery-cell">
            <p>3/24/18</p>
            <h2>Name of Bundle</h2>
            <div>
            <input type="checkbox" id="coding" name="interest" value="coding" checked/>
            <label for="coding">Lunges (1-2 x 15-20)</label>
            </div>
            <div>
              <input type="checkbox" id="music" name="interest" value="music"/>
              <label for="music">Squats (1-2 x 15-20)</label>
            </div>
            <div>
              <input type="checkbox" id="music" name="interest" value="music"/>
              <label for="music">Jumping Jacks (1-2 x 15-20)</label>
            </div>
          </div>

          <div class="gallery-cell">
            <p>3/24/18</p>
            <h2>Name of Bundle</h2>
            <div>
            <input type="checkbox" id="coding" name="interest" value="coding" checked/>
            <label for="coding">Lunges (1-2 x 15-20)</label>
            </div>
            <div>
              <input type="checkbox" id="music" name="interest" value="music"/>
              <label for="music">Squats (1-2 x 15-20)</label>
            </div>
            <div>
              <input type="checkbox" id="music" name="interest" value="music"/>
              <label for="music">Jumping Jacks (1-2 x 15-20)</label>
            </div>
          </div>

          <div class="gallery-cell">
            <p>3/24/18</p>
            <h2>Name of Bundle</h2>
            <div>
            <input type="checkbox" id="coding" name="interest" value="coding" checked/>
            <label for="coding">Lunges (1-2 x 15-20)</label>
            </div>
            <div>
              <input type="checkbox" id="music" name="interest" value="music"/>
              <label for="music">Squats (1-2 x 15-20)</label>
            </div>
            <div>
              <input type="checkbox" id="music" name="interest" value="music"/>
              <label for="music">Jumping Jacks (1-2 x 15-20)</label>
            </div>
          </div>

          <div class="gallery-cell">
            <p>3/24/18</p>
            <h2>Name of Bundle</h2>
            <div>
            <input type="checkbox" id="coding" name="interest" value="coding" checked/>
            <label for="coding">Lunges (1-2 x 15-20)</label>
            </div>
            <div>
              <input type="checkbox" id="music" name="interest" value="music"/>
              <label for="music">Squats (1-2 x 15-20)</label>
            </div>
            <div>
              <input type="checkbox" id="music" name="interest" value="music"/>
              <label for="music">Jumping Jacks (1-2 x 15-20)</label>
            </div>
          </div>

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
