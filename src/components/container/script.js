export default {
  name: 'Container',
  props: { title: String },
  methods: {
    toggleDisplay(id) {
      const style = document.getElementById(id).style.display
      if (style == "none")
        document.getElementById(id).style.display = "block"
      else
        document.getElementById(id).style.display = "none"
    },
    openNotification() {
      this.toggleDisplay('notification')
    },
    openUserInfo() {
      this.toggleDisplay('user_info')
    },
    logout() {
      this.$session.destroy()
      location.reload()
    }
  }
}
