import React, { Component } from 'react'
import {Bar} from 'react-chartjs-2';

var options = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
}
function formatDate(elem){
    let date = new Date(elem.daterecorded);
    return (date.getMonth()+1) + "-" + date.getDate(); //month index starts at 0
}

function transformStats(stats) {
  let chartData = {
    labels: stats.map(formatDate),
    datasets: [{
            label: 'Strength',
            data: stats.map(e => e.strength),
            backgroundColor:'rgba(75, 192, 192, 0.2)',
            borderColor:'rgba(153, 102, 255, 1)',
            borderWidth: 1
        }]
  }
  return chartData;
}

class Charts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Bar
      data={transformStats(this.props.statsData)}
      options={options}
      />
    )
  }
}

export default Charts
