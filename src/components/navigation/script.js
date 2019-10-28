import { routes } from '@/routes'
import { mapState } from 'vuex'

export default {
  name: 'LeftNavigation',
  computed: mapState(['page_name']),
  data() {
    return {
      navigation: [],
    }
  },
  beforeMount() {
    this.$data.navigation = routes
      .filter(route => route.meta ? route.meta.showOnNav : false)
      .map(route => {
        return { name: route.name , image: route.meta.image, url: route.path }
      })
  },
}
