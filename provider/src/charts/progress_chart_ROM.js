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
