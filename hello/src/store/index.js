import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    singlePage:{}
  },
  mutations: {
    setToken(state,data) {
      state.token = data
      localStorage.setItem('token',data)
    },
    setSinglePage(state,data) {
      Object.assign(state.singlePage,data)
      localStorage.setItem('singlePage',state.singlePage)
    },
  }
})