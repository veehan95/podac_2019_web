import { Pie } from 'vue-chartjs'

const options = {
  responsive: true,
  cutoutPercentage: 80,
  legend: { display: false },
  tooltips: { enabled: false },
  hover: { mode: false },
}

export default {
  extends: Pie,
  name: 'Pie_Chart',
  props: ["rating"],
  watch: {
    rating: function(newVal) {
      this.renderChart({
        legend: { display: false },
        datasets: [{
          backgroundColor: ['#DAE02A', '#6D6D6D'],
          data: [newVal, 5 - newVal],
          borderWidth: 0
        }]
      }, options)
    }
  },
}
