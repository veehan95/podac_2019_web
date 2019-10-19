import Container from '../../components/container'
import Table from '../../components/table'
import db from '../../db'

const db_ref = db.ref("feedbacks")

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
    mounted() {
      db_ref.once("value")
        .then(snapshot => {
          const temp = {}
          const vals = snapshot.val()

          Object.keys(vals)
            .forEach(val => {
              const loc = vals[val].location
              if (temp[loc] == undefined)
                temp[loc] = [vals[val]]
              else
                temp[loc].push(vals[val])
            })

          return temp
        })
        .then(to_display => {
          return Object.keys(to_display)
            .map(loc => {
              const rating_q = to_display[loc].length
              const ttl_rating = to_display[loc]
                .reduce((x, y) => x + y.rating, 0)

              return {
                id: loc,
                data: {loc, rating: (ttl_rating/rating_q).toFixed(2), rating_q},
              }
            })
        })
        .then(vals => this.$data.vals = vals)
    }
}
