import Notification from './notification'
import MoreOptions from './more_options'
import { get_rating_list } from '@/utils/db'
import { mixin as clickaway } from 'vue-clickaway';

export default {
  name: 'Container',
  mixins: [ clickaway ],
  components: { Notification, MoreOptions },
  props: { title: String },
  data() { return {
    search: '',
    result_sample: [],
    result: [],
    show: false,
  }},
  async beforeCreate() {
    this.$data.result_sample = Object.keys(await get_rating_list())
      .map(x => x.replace(/_/g, ' '))
  },
  watch: {
    search(newVal) {
      this.$data.show = true
      if (newVal == "") {
        this.$data.result = []
      } else {
        this.$data.result = this.$data.result_sample
          .filter(x => x.toLowerCase().indexOf(newVal.toLowerCase()) >= 0)
      }
    },
  },
  methods: {
    away: function() { this.$data.show = false },
    to: function(e) {
      this.$router.push(`/location/${e}`)
      location.reload()
    }
  },
}
