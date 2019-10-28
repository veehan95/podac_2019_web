import { Line } from 'vue-chartjs'

var options = {
    responsive:true,
    maintainAspectRatio: false,
    legend: { display: false },
    tooltips: { enabled: false },
    scales: {
        xAxes: [{
          gridLines: { color: 'black', display: false },
          ticks: { fontColor: 'black' },
        }],
        yAxes: [{
          gridLines: { color: 'black', display: true },
          ticks: { beginAtZero: true, max: 5, stepSize: 1, display: true, fontColor: 'black' },
        }],
    },
    title: {
      display: true,
      text: 'Ratings in the past 6 months',
      fontColor: 'black'
    }
}

export default {
  extends: Line,
  name: 'Line_Chart',
  props: ['points'],
  data() { return { data: [] } },
  watch: {
    points: function(newVal) {
      this.renderChart({
        labels: newVal.map(item => item.x),
        datasets: [{data: newVal}]
      }, options)
    }
  },
}
