import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

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
    legendPosition:'right',
  }

  render(){
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:this.props.title,
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            },
            scales: {
              xAxes: [{
                display: true,
                ticks: {
                  callback: function(dataLabel, index) {
                    // Hide the label of every 2nd dataset. return null to hide the grid line too
                    return index % 2 === 0 ? dataLabel : '';
                  }
                }
              }],
              yAxes: [{
                type: "linear",
                display: true,
                position: "left",
                id: "y-axis-1",
                scaleLabel: {
                  display: true,
                  fontSize: 18,
                  labelString: "PEG Score"
                },
                gridLines: {
                    display: true,
                    drawBorder: true,
                    drawOnChartArea: false,
                }
              }, {
                type: "linear",
                display: true,
                position: "right",
                id: "y-axis-2",
                scaleLabel: {
                  display: true,
                  fontSize: 18,
                  labelString: "ROM Percentage"
                },
                gridLines: {
                    display: true,
                    drawBorder: true,
                    drawOnChartArea: false,
                }

              }],
            }
          }}
        />
      </div>
    )
  }
}

export default Chart;
