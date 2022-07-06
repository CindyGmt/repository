import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    singlePage:{
      elArr:[]
    }
  },
  mutations: {
    setToken(state,data) {
      state.token = data
      localStorage.setItem('token',data)
    },
    setSinglePage(state,data) {
      state.singlePage = {...state.singlePage,...data}
      // Object.assign(state.singlePage,data)
      localStorage.setItem('singlePage',JSON.stringify(state.singlePage))
    },
    pushEl(state,data){
      state.singlePage.elArr.push(data)
      localStorage.setItem('singlePage',JSON.stringify(state.singlePage))
    }
  }
})