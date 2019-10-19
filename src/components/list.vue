<template lang="pug">
  div
    ul
      li(v-for="link in links" :class="{active: active == link.name}")
        router-link(:to="link.url") {{ link.name }}
</template>
<script>
export default {
  name: 'Card',
  props: {
    links: {
      type: Array,
      validator: value => typeof value === 'object' || value instanceof Object,
    },
    active: String,
  },
}
</script>
<style lang="sass" scoped>
ul
  li
    list-style-type: none
    width: 100%
    &.active
      background: rgba(255, 255, 255, .14)
    a
      width: 100%
      display: block
      font-size: 35px
      padding: 15px 20px
      color: white
</style>
