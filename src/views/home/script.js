import Container from '../../components/container'
import app_config from '../../assets/app_config.json'

export default {
    name: 'home',
    components: { Container },
    data() { return { app_name: app_config.app_name } },
    beforeCreate() { this.$emit('page', 'Home') }
}
