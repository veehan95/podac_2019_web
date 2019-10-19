import { Line } from 'vue-chartjs'

var options = {
    responsive:true,
    maintainAspectRatio: false,
    legend: { display: false },
    tooltips: { enabled: false },
    scales: {
        xAxes: [{
          gridLines: { color: "#131c2b", display: false },
          ticks: { beginAtZero: true, min: 0 },
        }],
        yAxes: [{
          gridLines: { color: "#131c2b", display: false },
          ticks: { beginAtZero: true, max: 5, stepSize: 1, display: false },
        }],
    }
}

export default {
  extends: Line,
  name: 'Line_Chart',
  props: ["points"],
  watch: {
    points: function(newVal) {
      newVal
      this.renderChart({datasets: [{data: newVal}]}, options)
    }
  },
}
