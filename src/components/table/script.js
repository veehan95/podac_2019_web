export default {
  name: 'Table',
  props: {
    theads: Array,
    data: Array,
  },
  methods: {
    rowClicked(self) {
      //eslint-disable-next-line
      console.log(self.target.parentElement)
      this.$router.push(`/location/${self.target.parentElement.id}`)
    }
  }
}
