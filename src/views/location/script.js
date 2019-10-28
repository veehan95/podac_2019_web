import Container from '@/components/container'
import Pie from '@/components/pie_chart'
import LineChartCard from '@/components/line_chart_card'
import Table from '@/components/table'
import Card from '@/components/card'
import { get_rating, get_agent, get_feedbacks, get_user, get_image } from '@/utils/db'


export default {
    name: 'location',
    components: { Container, Pie, LineChartCard, Card, Table },
    data() {
      return {
        feedback_header: [
          {prop: 'user_id', name: 'user_id' },
          {prop: 'user_name', name: 'user_name' },
          {prop: 'coordinate', name: 'coordinate'},
          {prop: 'image_url', name: 'image', image: true },
          {prop: 'image_mark', name: 'higlights in image'},
          {prop: 'rating', name: 'rating'},
          {prop: 'description', name: 'description'},
        ],
        feedbacks: [],
        pie_data: {
          average_rating: 0,
          number_of_ratings: 0,
          agent_assigned: 'N/A',
          severity: 'N/A'
        },
        line_data: [],
        show_image: false,
        img_large: "",
      }
    },
    beforeCreate() { this.$emit('page', 'Location') },
    methods: {
      close_image() { this.$data.show_image = false },
      async update_rating_info() {
        const info = await get_rating(this.$route.params.id)

        let agent = "N/A"
        if (info.agent_assigned != undefined) {
          agent = await get_agent(info.agent_assigned)
          info.agent_assigned = `${agent.last_name} ${agent.first_name}`
        }
        const average_rating = (info.rating.total / info.rating.number_of_rating).toFixed(2)
        this.$data.pie_data = {
          average_rating,
          number_of_ratings: info.rating.total,
          agent_assigned: agent,
          severity: Math.round(average_rating)
        }

        const d = new Date()
        const min_date = d.getFullYear()*10000+(d.getMonth()-5)*100+d.getDate()

        let line_data = Object.keys(info.history)
          .filter(i => parseInt(i.replace(/_/g, '')) > min_date)
          .map(i => {
            return {
              x: parseInt(i.replace(/_/g, '')),
              y: info.history[i].rating.number_of_rating/info.history[i].rating.total
            }
          })
        while (line_data.length < 6)
          line_data.unshift({x: line_data[0].x - 100, y: 0})
        this.$data.line_data = line_data
      },
      async update_feedbacks() {
        const feedbacks = await get_feedbacks(this.$route.params.id)
        const feedback_promise = Object.keys(feedbacks)
          .map(async key => {
            const user = await get_user(feedbacks[key].user)
            const image_url = await get_image('123451.jpg')
            return {
              coordinate: `${feedbacks[key].coordinate.y}, ${feedbacks[key].coordinate.y}`,
              image_mark: feedbacks[key].image_mark ? feedbacks[key].image_mark.length : 0,
              rating: feedbacks[key].rating,
              user_id: feedbacks[key].user,
              user_name: `${user.last_name} ${user.first_name}`,
              description: feedbacks[key].description || 'N/A',
              image_url,
              e_fire: {name: 'reward_clicked', val: image_url},
            }
          })
        this.$data.feedbacks = await Promise.all(feedback_promise)
      }
    },
    mounted() {
      this.update_rating_info()
      this.update_feedbacks()
      document.addEventListener("reward_clicked", (e) => {
        this.$data.img_large = e.detail
        this.$data.show_image = true
      });
    }
}
