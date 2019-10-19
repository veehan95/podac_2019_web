import Container from '../../components/container'
import AnalyticCardPie from '../../components/analytic_card_pie'
import AnalyticCardLine from '../../components/analytic_card_line'
import Card from '../../components/card'
import { get_rating, get_agent, get_feedbacks, get_user } from '../../assets/db'


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
    beforeCreate() { this.$emit('page', 'Location') },
    methods: {
      async update_rating_info() {
        const info = await get_rating(this.$route.params.id)

        let agent = "N/A"
        if (info.agent_assigned != undefined) {
          agent = await get_agent(info.agent_assigned)
          info.agent_assigned = `${agent.last_name} ${agent.first_name}`
        }
        const avg_rating = (info.number_of_ratings / info.total_rating).toFixed(2)
        this.$data.pie_data = {
          average_rating: (info.number_of_ratings / info.total_rating).toFixed(2),
          number_of_ratings: info.number_of_ratings,
          agent_assigned: info.agent_assigned,
          severity: Math.round(avg_rating)
        }

        const line_data = Object.keys(info.history)
          .map(key => {
            return {
              x: parseInt(key),
              y: info.history[key].total_rating/info.history[key].number_of_ratings
            }
          })
        while (line_data.length < 6)
          line_data.unshift({x: line_data[0].x - 1, y: 0})
        this.$data.line_data = line_data
      },
      async update_feedbacks() {
        const feedbacks = await get_feedbacks(this.$route.params.id)
        const feedback_promise = Object.keys(feedbacks)
          .map(async key => {
            const user = await get_user(feedbacks[key].user)
            return [
              `coordinate: ${feedbacks[key].coordinate.x}, ${feedbacks[key].coordinate.y}`,
              `marked area: ${feedbacks[key].image_mark.length}`,
              `rating: ${feedbacks[key].rating}`,
              `user: ${user.last_name} ${user.first_name}`,
              `description: ${feedbacks[key].description || '-'}`,
            ]
          })
        this.$data.feedbacks = await Promise.all(feedback_promise)
      }
    },
    mounted() {
      this.update_rating_info()
      this.update_feedbacks()
    }
}
