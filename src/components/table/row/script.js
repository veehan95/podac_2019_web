export default {
  name: 'Row',
  props: [
    'clickable',
    'danger',
    'url',
    'e_fire',
    'values',
    'align',
    'image',
  ],
  methods: {
    rowClicked() {
      if (this.$props.url)
        this.$router.push(`/location/${this.$props.url}`)
      if (this.$props.e_fire)
        document.dispatchEvent(new CustomEvent(
          this.$props.e_fire.name, {detail: this.$props.e_fire.val}
        ))
    },
    value_limiter(val) {
      const str_val = String(val)
      return str_val.length < 50 ? str_val : str_val.substring(0, 50) + '...'
    },
  },
}
