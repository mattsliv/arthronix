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
import '../styles/docs/assets/css/patient/datepicker.js';

// import Charts from './Charts';
import Charts2 from './Charts2';
var JSONPretty = require('react-json-pretty');


class PatientBundle extends Component {
  render() {

    return(
      <div>


        <div class="container">
          <div class="row">
            <div class="col-md-12 gallery js-flickity">
              <div class="statcard statcard-primary p-4 mb-2 gallery-cell">
                <p class="statcard-number">3/24/18</p>
                <h2 class="statcard-number">Name of Bundle</h2>
                <div class="statcard-desc">
                  <input type="checkbox" id="coding" name="interest" value="coding" checked/>
                  <label for="coding">Lunges (1-2 x 15-20)</label>
                </div>
                <div class="statcard-desc">
                  <input type="checkbox" id="music" name="interest" value="music"/>
                  <label for="music">Squats (1-2 x 15-20)</label>
                </div>
                <div class="statcard-desc">
                  <input type="checkbox" id="music" name="interest" value="music"/>
                  <label for="music">Jumping Jacks (1-2 x 15-20)</label>
                </div>
              </div>


              <div class="statcard statcard-primary p-4 mb-2 gallery-cell">
                <p class="statcard-number">3/24/18</p>
                <h2 class="statcard-number">Name of Bundle</h2>
                <div class="statcard-desc">
                <input type="checkbox" id="coding" name="interest" value="coding" checked/>
                <label for="coding">Lunges (1-2 x 15-20)</label>
                </div>
                <div class="statcard-desc">
                  <input type="checkbox" id="music" name="interest" value="music"/>
                  <label for="music">Squats (1-2 x 15-20)</label>
                </div>
                <div class="statcard-desc">
                  <input type="checkbox" id="music" name="interest" value="music"/>
                  <label for="music">Jumping Jacks (1-2 x 15-20)</label>
                </div>
              </div>

              <div class="statcard statcard-primary p-4 mb-2 gallery-cell">
                <p class="statcard-number">3/24/18</p>
                <h2 class="statcard-number">Name of Bundle</h2>
                <div class="statcard-desc">
                <input type="checkbox" id="coding" name="interest" value="coding" checked/>
                <label for="coding">Lunges (1-2 x 15-20)</label>
                </div>
                <div class="statcard-desc">
                  <input type="checkbox" id="music" name="interest" value="music"/>
                  <label for="music">Squats (1-2 x 15-20)</label>
                </div>
                <div class="statcard-desc">
                  <input type="checkbox" id="music" name="interest" value="music"/>
                  <label for="music">Jumping Jacks (1-2 x 15-20)</label>
                </div>
              </div>

              <div class="statcard statcard-primary p-4 mb-2 gallery-cell">
                <p class="statcard-number">3/24/18</p>
                <h2 class="statcard-number">Name of Bundle</h2>
                <div class="statcard-desc">
                <input type="checkbox" id="coding" name="interest" value="coding" checked/>
                <label for="coding">Lunges (1-2 x 15-20)</label>
                </div>
                <div class="statcard-desc">
                  <input type="checkbox" id="music" name="interest" value="music"/>
                  <label for="music">Squats (1-2 x 15-20)</label>
                </div>
                <div class="statcard-desc">
                  <input type="checkbox" id="music" name="interest" value="music"/>
                  <label for="music">Jumping Jacks (1-2 x 15-20)</label>
                </div>
              </div>

              <div class="statcard statcard-primary p-4 mb-2 gallery-cell">
                <p class="statcard-number">3/24/18</p>
                <h2 class="statcard-number">Name of Bundle</h2>
                <div class="statcard-desc">
                <input type="checkbox" id="coding" name="interest" value="coding" checked/>
                <label for="coding">Lunges (1-2 x 15-20)</label>
                </div>
                <div class="statcard-desc">
                  <input type="checkbox" id="music" name="interest" value="music"/>
                  <label for="music">Squats (1-2 x 15-20)</label>
                </div>
                <div class="statcard-desc">
                  <input type="checkbox" id="music" name="interest" value="music"/>
                  <label for="music">Jumping Jacks (1-2 x 15-20)</label>
                </div>
              </div>

              <div class="statcard statcard-primary p-4 mb-2 gallery-cell">
                <p class="statcard-number">3/24/18</p>
                <h2 class="statcard-number">Name of Bundle</h2>
                <div class="statcard-desc">
                <input type="checkbox" id="coding" name="interest" value="coding" checked/>
                <label for="coding">Lunges (1-2 x 15-20)</label>
                </div>
                <div class="statcard-desc">
                  <input type="checkbox" id="music" name="interest" value="music"/>
                  <label for="music">Squats (1-2 x 15-20)</label>
                </div>
                <div class="statcard-desc">
                  <input type="checkbox" id="music" name="interest" value="music"/>
                  <label for="music">Jumping Jacks (1-2 x 15-20)</label>
                </div>
              </div>

              <div class="statcard statcard-primary p-4 mb-2 gallery-cell">
                <p class="statcard-number">3/24/18</p>
                <h2 class="statcard-number">Name of Bundle</h2>
                <div class="statcard-desc">
                <input type="checkbox" id="coding" name="interest" value="coding" checked/>
                <label for="coding">Lunges (1-2 x 15-20)</label>
                </div>
                <div class="statcard-desc">
                  <input type="checkbox" id="music" name="interest" value="music"/>
                  <label for="music">Squats (1-2 x 15-20)</label>
                </div>
                <div class="statcard-desc">
                  <input type="checkbox" id="music" name="interest" value="music"/>
                  <label for="music">Jumping Jacks (1-2 x 15-20)</label>
                </div>
              </div>

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
      <div class="container">
       <div class="row">
         <div class="col-md-10 patient-main">
             <h2>Elaine Tsun</h2>
             <img src={green} alt="green" width="25px"/>
             <h5>KNEE</h5>
             <h3><a href="#">Messages <span class="badge">1</span></a></h3>
        </div>
           <div class="col-md-2">
            <div class="row">
              <button type="button" class="btn btn-default">+ Add new data</button>
            </div>
            <div class="row">
              <div class="btn-toolbar dashhead-toolbar">
                <div class="btn-toolbar-item input-with-icon">
                  <input type="text" value="01/01/15 - 01/08/15" class="form-control" data-provide="datepicker"/>
                  <span class="icon icon-calendar"></span>
                </div>
              </div>
            </div>
           </div>

       </div>
      </div>
    )
    }
    return (
      <Router>
        <div>
          {readyPatient}
          <PatientBundle patients={this.props.patients}/>

          <PatientStats patient={this.props.patients}/>

          <Charts2 chartData={this.state.chartWeekData} title="Patient PEG & ROM (Weekly)" legendPosition="bottom"/>
          <Charts2 chartData={this.state.chartMonthData} title="Patient PEG & ROM (Monthly)" legendPosition="bottom"/>
          {/* <Charts statsData={this.state.stats}/> */}

        </div>
      </Router>


    )
  }
}

export default PatientPage
