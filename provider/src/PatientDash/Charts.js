import React, { Component } from 'react'

var data = {
  labels: ["Mon", "Tues", "Weds", "Thurs", "Fri", "Sat", "Sun"], //x-axis
  datasets: [{
          label: 'Strength',
          data: [2, 2, 4, 3, 5, 4, 5.5], //y-axis
          backgroundColor:'rgba(75, 192, 192, 0.2)',
          borderColor:'rgba(153, 102, 255, 1)',
          borderWidth: 1
      }]
};

var options = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
}

class Charts extends Component {
  render() {
    // var ctx = document.getElementById("strength").getContext("2d");
    var BarChart = require('react-chartjs').Bar

    function MyChart(props) {
      return (
        <BarChart data={data} options={options}/>
      )
    }
    // var MyChart = React.createClass({
    //   render: function() {
    //     return <BarChart data={data} options={options}/>
    //   }
    // });

    // var barChart = new Chart(ctx, {
    //   type:'bar',
    //   data: data,
    //   options: options
    // });
    return (
      <div>
        <head>
          <h1>My Progress</h1>
          <script src="Chart.min.js"></script>
          <script src="progress_chart_ROM.js"></script>
        </head>
        <body>
          <div class="canvas-container">
            <canvas id="strength"></canvas>
          </div>
          {myChart}
        </body>
      </div>
    )
  }
}

export default Charts
