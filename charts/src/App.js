import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';

class App extends Component {
  constructor(){
    super();
    this.state = {
      chartWeekData:{},
      chartMonthData:{}
    }
  }

  componentWillMount(){
    this.getChartWeekData();
    this.getChartMonthData();
  }

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
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Arthronix Charts</h2>
        </div>
        <div>
          <Chart chartData={this.state.chartWeekData} title="Patient Statistics (Weekly)" legendPosition="bottom"/>
          <Chart chartData={this.state.chartMonthData} title="Patient Statistics (Monthly)" legendPosition="bottom"/>
        </div>
      </div>
    );
  }
}

export default App;
