import Container from '@/components/container'
import Card from '@/components/card'
import app_config from '@/assets/app_config.json'

export default {
    name: 'Home',
    components: { Container, Card },
    data() {
      return {
        app_name: app_config.app_name,
      }
    },
    beforeCreate() {
      this.$store.commit('change_page', 'Home')
    }
}
