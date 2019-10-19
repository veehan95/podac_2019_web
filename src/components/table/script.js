export default {
  name: 'Table',
  props: {
    theads: Array,
    data: Array,
  },
  methods: {
    rowClicked() { alert("clicked") }
  }
}
