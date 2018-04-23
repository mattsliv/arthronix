import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right'
  }

  render(){
    return (
      <div className="chart">
        <Line
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:this.props.title,
              fontSize:25,
              fontColor: 'white'
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition,
              labels: {
                fontColor: 'white'
              }
            },
            scales: {
              xAxes: [{
                display: true,
                distribution: 'series',
                scaleLabel: {
                  display: true,
                  fontSize: 18,
                  fontColor: 'white',
                  labelString: "Day of the Week"
                },
                ticks: {
                  fontColor: 'white'
                },
                gridLines : {
                  display: true,
                  drawBorder: true,
                  drawOnChartArea: false,
                  drawTicks: true,
                  color: 'white'
                }
              }],
              yAxes: [
              {
                ticks: {
                  fontColor: 'white',
                  suggestedMin: 0,
                  suggestedMax: 10
                },
                type: "linear",
                display: true,
                position: "left",
                id: "y-axis-1",
                scaleLabel: {
                  display: true,
                  fontSize: 18,
                  fontColor: 'white',
                  labelString: "PEG & Strength Score (0-10)"
                },
                gridLines: {
                    display: true,
                    drawBorder: true,
                    drawOnChartArea: false,
                    drawTicks: true,
                    color: 'white'
                }
              },
              {
                ticks: {
                  fontColor: 'white',
                  reverse: true,
                  suggestedMin: 0,
                  suggestedMax: 180
                },
                type: "linear",
                display: true,
                position: "right",
                id: "y-axis-2",
                scaleLabel: {
                  display: true,
                  fontSize: 18,
                  fontColor: 'white',
                  labelString: "ROM Percentage (0-180%)"
                },
                gridLines: {
                  display: true,
                  drawBorder: true,
                  drawOnChartArea: false,
                  drawTicks: true,
                    color: 'white'
                }
              }
              ],
            },
            tooltips: {
              mode: 'index',
              intersect: false
            }
          }}/>
      </div>
    )
  }

}

export default Chart;
