import Container from '../../components/container'
import AnalyticCardPie from '../../components/analytic_card_pie'
import AnalyticCardLine from '../../components/analytic_card_line'
import Card from '../../components/card'
import db from '../../db'

const db_ref = db.ref("feedbacks")

export default {
    name: 'location',
    components: { Container, AnalyticCardPie, AnalyticCardLine, Card },
    data() {
      return {
        feedbacks: [],
        pie_data: {
          average_rating: 0,
          number_of_ratings: 0,
          agent_assigned: "N/A",
          severity: "N/A"
        },
        line_data: []
      }
    },
    beforeCreate() { this.$emit('page', `Location\\${this.$route.params.id}`) },
    mounted() {
      db_ref.once("value")
        .then(snapshot => {
          const vals = snapshot.val()
          this.$data.feedbacks = Object.keys(vals)
            .filter(key => vals[key].location == this.$route.params.id)
            .map(key => vals[key])
          // const number_of_ratings = feedbacks.length
          // const average_rating = feedbacks
          //   .reduce((x, y) => x + y.rating, 0) / this.$data.number_of_ratings
          this.$data.pie_data = {
            number_of_ratings: 10,
            average_rating: 1,
            severity: "N/A",
            agent_assigned: "N/A",
          }
          this.$data.line_data = [{ x: 1, y: 2 }, { x: 3, y: 4 }]
        })
        // .then(to_display => {
        //   return Object.keys(to_display)
        //     .map(loc => {
        //       const rating_q = to_display[loc].length
        //       const ttl_rating = to_display[loc]
        //         .reduce((x, y) => x + y.rating, 0)
        //
        //       return {
        //         id: loc,
        //         data: {loc, rating: (ttl_rating/rating_q).toFixed(2), rating_q},
        //       }
        //     })
        // })
        // .then(vals => this.$data.vals = vals)
    }
}
