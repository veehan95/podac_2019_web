import LeftNavigation from '@/components/navigation'

export default {
  name: 'App',
  components: { LeftNavigation },
  data() { return { authorized: false, } },
  methods: {
    auth() { this.$data.authorized = this.$session.exists('loggined') }
  },
  mounted() { this.auth() },
  updated() { this.auth() },
}
