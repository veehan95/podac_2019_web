import HangingPopup from '@/components/hanging_popup'

export default {
  name: 'Notification',
  components: { HangingPopup },
  data() {
    return {
      email: "agent_email",
      first_name: "agent_first_name",
      last_name: "agent_last_name",
    }
  },
  mounted() {
    const user = this.$session.get('user')
    this.$data.email = user.email
    this.$data.first_name = user.first_name
    this.$data.last_name = user.last_name
  },
  methods: {
    under_construction() { alert('item is under constrcution') },
    logout() {
      this.$session.destroy()
      location.reload()
    }
  },
}
