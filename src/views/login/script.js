import { get_user_id } from '@/utils/db'
import app_config from '@/assets/app_config.json'

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      app_name: app_config.app_name,
      loading: false,
    }
  },
  methods: {
    async login() {
      this.$data.loading= true
      get_user_id(this.$data.username)
        .then(user => {
          if (user == undefined) {
            alert('Invalid login.')
          } else if (this.$data.password != user[Object.keys(user)[0]].password) {
            alert('Invalid login.')
          } else {
            this.$session.set('loggined', true)
            this.$session.set('user', user[Object.keys(user)[0]])
            this.$router.push('/')
          }
          this.$data.loading= false
        })
    },
  },
}
