import $ from 'jquery'

export default {
  name: 'HangingPopup',
  props: [ 'classes', ],
  data() {
    return { show: false, }
  },
  methods: {
    toggleDisplay(show) {
      $('.hanging_popup').css("display", 'none')
      this.$data.show = show != undefined ? show : !this.$data.show
    },
  },
}
