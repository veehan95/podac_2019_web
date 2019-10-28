export default {
  name: 'Row',
  props: [
    'clickable',
    'danger',
    'url',
    'values',
    'align',
  ],
  methods: {
    rowClicked() { this.$router.push(`/location/${this.$props.url}`) }
  },
}
