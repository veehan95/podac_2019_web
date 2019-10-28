import Container from '../../components/container'
import Table from '../../components/table'
import { get_reward, get_image } from '@/utils/db'

export default {
  name: 'Reward',
  components: { Container, Table },
  data() {
    return {
      theads: [
        { prop: 'name', name: 'name'},
        { prop: 'image', name: 'image', image: true},
        { prop: 'details', name: 'details'},
        { prop: 'points', name: 'points'},
        { prop: 'available', name: 'available'},
      ],
      vals: [],
    }
  },
  beforeCreate() {
    this.$store.commit('change_page', 'Reward')
  },
  mounted() {
    get_reward()
      .then(async reward => {
        const prom = Object.keys(reward)
          .map(async key => {
            return {
              available: reward[key].available,
              details: reward[key].details,
              image: await get_image(reward[key].image),
              name: reward[key].name,
              points: reward[key].points,
            }
          })
        this.$data.vals = await Promise.all(prom)
      })
  },
}
