import { routes } from '../../routes';

export default {
  name: 'LeftNavigation',
  props: { page_name: String },
  data() { return { navigation: [] }},
  beforeMount() {
    this.$data.navigation = routes
      .filter(route => route.meta ? route.meta.showOnNav : false)
      .map(route => {
        return { name: route.name , image: route.meta.image, url: route.path }
      })
  },
}
