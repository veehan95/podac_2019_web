import Row from './row'
import Loading from './loading'

export default {
  name: 'Table',
  components: { Row, Loading },
  props: {
    theads: Array,
    data: Array,
    rowspan: {
      type: Number,
      default: 5,
    },
    clickable: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return { loading: true, }
  },
  watch: {
    process_data() { this.$data.loading = false }
  },
  computed: {
    process_data() {
      return this.$props.data.map(item => {
          return {
            values: this.$props.theads.map(th => item[th.prop]),
            danger: item.danger,
            align: this.$props.theads.map(th => th.align || 'middle'),
            image: this.$props.theads.map(th => th.image || false),
            url: item.href,
            e_fire: item.e_fire,
            item: item
          }
        })
    },
  }
}
