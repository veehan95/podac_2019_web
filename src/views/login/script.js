export default {
  name: 'Login',
  data() { return { username: "", password: "", } },
  methods: {
    login() {
      if (this.username == "") {
        alert("Please enter user id.")
      } else if (this.password == "") {
        alert("Please enter password.")
      } else {
        this.$session.set("loggined", true)
        this.$router.push('/')
      }
    },
  },
}
