import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  page_name: ''
}

const mutations = {
  change_page(state, page) {
    state.page_name = page
  }
}

const getters = {
  page_name: state => state.page_name
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
})
