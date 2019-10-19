import Container from '../../components/container'
import Table from '../../components/table'
import { get_rating_list, get_agent } from '../../assets/db'

export default {
    name: 'home',
    components: { Container, Table },
    data() {
      return {
        theads: [
          { prop: "loc", name: "Location", align: "left" },
          { prop: "rating", name: "Rating" },
          { prop: "rating_q", name: "Rating Quantity" },
          { prop: "agent", name: "Agent Assigned" },
        ],
        vals: []
      }
    },
    beforeCreate() { this.$emit('page', 'Ratings') },
    methods: {
      async createRow(location, row) {
        let agent = "N/A"
        if (row.agent_assigned != undefined) {
          const name = await get_agent(row.agent_assigned)
          agent = `${name.last_name} ${name.first_name}`
        }
        return {
          loc: location.replace(/_/g, ' '),
          href: location,
          rating: (row.total_rating / row.number_of_ratings).toFixed(2),
          rating_q: row.number_of_ratings,
          agent,
          danger: (row.total_rating / row.number_of_ratings) < 2
        }
      },
      async updateTable() {
        const list = await get_rating_list()
        const vals_promise = Object.keys(list)
          .map(key => this.createRow(key, list[key]))
        const vals = await Promise.all(vals_promise)
        this.$data.vals = vals.sort((a, b) => (a.rating > b.rating) ? 1 : -1)
      },
    },
    mounted() {
      this.updateTable()
    }
}
