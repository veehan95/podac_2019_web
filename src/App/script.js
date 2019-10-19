import LeftNavigation from '../components/navigation'

export default {
  name: 'App',
  components: { LeftNavigation },
  data() {
    return {
      authorized: false,
      page_name: "",
    }
  },
  mounted() { this.$data.authorized = this.$session.exists("loggined") },
  updated() { this.$data.authorized = this.$session.exists("loggined") },
  methods: {
    getPageName(name) { this.$data.page_name = name }
  }
}
