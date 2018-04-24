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
import LineCharts from './LineCharts';
var JSONPretty = require('react-json-pretty');

class PatientBundle extends Component {
  render() {
    console.log(this.props)
    return(
      <div>
        <div class="container">
          <div class="row">
            <div class="col-md-12 gallery js-flickity">
              <div class="statcard statcard-primary p-4 mb-2 gallery-cell">
                <p class="statcard-number">4/22/18</p>
                <h2 class="statcard-number">Name of Bundle</h2>
                <div class="statcard-desc">
                  <input type="checkbox" id="coding" name="interest" value="coding" checked/>
                  <label for="coding">Lunges (1-2 x 15-20)</label>
                </div>
                <div class="statcard-desc">
                  <input type="checkbox" id="music" name="interest" value="music" checked/>
                  <label for="music">Squats (1-2 x 15-20)</label>
                </div>
                <div class="statcard-desc">
                  <input type="checkbox" id="music" name="interest" value="music" checked/>
                  <label for="music">Jumping Jacks (1-2 x 15-20)</label>
                </div>
              </div>

              <div class="statcard statcard-primary p-4 mb-2 gallery-cell">
                <p class="statcard-number">4/23/18</p>
                <h2 class="statcard-number">Name of Bundle</h2>
                <div class="statcard-desc">
                  <input type="checkbox" id="coding" name="interest" value="coding" checked/>
                  <label for="coding">Lunges (1-2 x 15-20)</label>
                </div>
                <div class="statcard-desc">
                  <input type="checkbox" id="music" name="interest" value="music" checked/>
                  <label for="music">Squats (1-2 x 15-20)</label>
                </div>
                <div class="statcard-desc">
                  <input type="checkbox" id="music" name="interest" value="music" checked/>
                  <label for="music">Jumping Jacks (1-2 x 15-20)</label>
                </div>
              </div>

              <div class="statcard statcard-primary p-4 mb-2 gallery-cell">
                <p class="statcard-number">4/24/18</p>
                <h2 class="statcard-number">Name of Bundle</h2>
                <div class="statcard-desc">
                  <input type="checkbox" id="coding" name="interest" value="coding" checked/>
                  <label for="coding">Lunges (1-2 x 15-20)</label>
                </div>
                <div class="statcard-desc">
                  <input type="checkbox" id="music" name="interest" value="music" checked/>
                  <label for="music">Squats (1-2 x 15-20)</label>
                </div>
                <div class="statcard-desc">
                  <input type="checkbox" id="music" name="interest" value="music" checked/>
                  <label for="music">Jumping Jacks (1-2 x 15-20)</label>
                </div>
              </div>

              <div class="statcard statcard-primary p-4 mb-2 gallery-cell">
                <p class="statcard-number">4/25/18</p>
                <h2 class="statcard-number">Name of Bundle</h2>
                <div class="statcard-desc">
                  <input type="checkbox" id="coding" name="interest" value="coding" checked/>
                  <label for="coding">Lunges (1-2 x 15-20)</label>
                </div>
                <div class="statcard-desc">
                  <input type="checkbox" id="music" name="interest" value="music" checked/>
                  <label for="music">Squats (1-2 x 15-20)</label>
                </div>
                <div class="statcard-desc">
                  <input type="checkbox" id="music" name="interest" value="music" checked/>
                  <label for="music">Jumping Jacks (1-2 x 15-20)</label>
                </div>
              </div>

              <div class="statcard statcard-primary p-4 mb-2 gallery-cell">
                <p class="statcard-number">4/26/18</p>
                <h2 class="statcard-number">Name of Bundle</h2>
                <div class="statcard-desc">
                  <input type="checkbox" id="coding" name="interest" value="coding" />
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
                <p class="statcard-number">4/27/18</p>
                <h2 class="statcard-number">Name of Bundle</h2>
                <div class="statcard-desc">
                  <input type="checkbox" id="coding" name="interest" value="coding" />
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
                <p class="statcard-number">4/28/18</p>
                <h2 class="statcard-number">Name of Bundle</h2>
                <div class="statcard-desc">
                  <input type="checkbox" id="coding" name="interest" value="coding" />
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

class PatientPage extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      chartData:{},
      isToggleWeek: true
    }
  }

  componentWillMount() {
    this.getChartWeekData();
    // this.getChartMonthData();

  }

  /* Retrieves Weekly charts */
  getChartWeekData(){
    // Ajax calls here
    this.setState({
      chartData:
        {
          labels:[
            "April 22 - Sun",
            "April 23 - Mon",
            "April 24 - Tue",
            "April 25 - Wed",
            "April 26 - Thur",
            "April 27 - Fri",
            "April 28 - Sat"
          ],
          datasets:[
            {
              label: 'PEG',
              yAxisID: "y-axis-1",
              data:[
                10,7,9,4,7,2,5
              ],
              fill: false,
              backgroundColor:'rgb(114, 71, 255)',
              borderColor: 'rgb(114, 71, 255)'
            },
            {
              label: 'Strength',
              yAxisID: "y-axis-1",
              data:[
                9,8,7,6,5,4,3
              ],
              fill: false,
              backgroundColor:'rgba(57, 172, 255, 1)',
              borderColor: 'rgba(57, 172, 255, 1)'
            },
            {
              label: 'ROM',
              yAxisID: "y-axis-2",
              data:[
                40,0,80,40,120,80,160
              ],
              fill: false,
              backgroundColor: 'rgb(249, 179, 60)',
              borderColor: 'rgb(249, 179, 60)'
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
      chartData:
        {
          labels:[
            "April 22",
            "April 23",
            "April 24",
            "April 25",
            "April 26",
            "April 27",
            "April 28"
          ],
          datasets:[
            {
              label: 'PEG',
              yAxisID: "y-axis-1",
              data:[
                10,7,9,4,7,2,5
              ],
              fill: false,
              backgroundColor:'rgb(114, 71, 255)',
              borderColor: 'rgb(114, 71, 255)'
            },
            {
              label: 'Strength',
              yAxisID: "y-axis-1",
              data:[
                9,8,7,6,5,4,3
              ],
              fill: false,
              backgroundColor:'rgba(57, 172, 255, 1)',
              borderColor: 'rgba(57, 172, 255, 1)'
            },
            {
              label: 'ROM',
              yAxisID: "y-axis-2",
              data:[
                40,0,80,40,120,80,160
              ],
              fill: false,
              backgroundColor: 'rgb(249, 179, 60)',
              borderColor: 'rgb(249, 179, 60)'
            }
          ]
      }
    }
   )
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleWeek: !prevState.isToggleWeek
    }));
    if (this.isToggleWeek) {
      this.getChartWeekData();
    } else {
      this.getChartMonthData();
    }
  }

  render() {
    const patients = this.props.patients;
    function openAssignModal(){
      document.getElementById('assign-modal').style.display = "block";
    }
    function closeAssignModal(){
      document.getElementById('assign-modal').style.display = "none";
    }

    return (
      <Router>
        <div>
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
                  {/* <button type="button" class="btn btn-default">+ Add New Data</button> */}
                  <button type="button" class="btn btn-default" onClick={openAssignModal}>+ Assign Bundle</button>
                  <div class="assign-modal">
                    <div id="assign-modal" class="my-modal" tabindex="-1" role="dialog">
                      <div class="my-modal-dialog" role="document">
                        <div class="my-modal-content">
                          <div class="my-modal-header">
                            <h3 class="my-modal-title">Assign Bundle</h3>
                          </div>
                          <div class="my-modal-body">
                            <select class="assign-select">
                              <option value="1">Week 1</option>
                              <option value="2">Week 2</option>
                              <option value="3">Week 3</option>
                              <option value="4">Week 4</option>
                              <option value="4">Week 5</option>
                            </select>
                          </div>
                          <div class="my-modal-footer">
                            <button type="button" class="btn btn-primary" onClick={closeAssignModal}>Assign</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
          <PatientBundle patients={this.props.patients}/>
          {/* <button onClick={this.handleClick}>
            {this.state.isToggleWeek ? 'Week' : 'Month'}
          </button> */}
          <LineCharts chartData={this.state.chartData} title="Patient Progress" legendPosition="top"/>
        </div>
      </Router>
    )
  }
}

export default PatientPage
