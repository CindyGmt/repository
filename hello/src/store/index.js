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
    },
    addElAttr(state,data){
      let info = JSON.parse(JSON.stringify(data[0]))
      let index = data[1]
      let el_i = state.singlePage.elArr[index]
      let newEl_i = JSON.parse(JSON.stringify({...el_i,...info}))
      state.singlePage.elArr.splice(index,1,newEl_i )
      localStorage.setItem('singlePage',JSON.stringify(state.singlePage))
    },
    clearSinglePage(state){
      state.singlePage = {
        elArr:[]
      }
      localStorage.setItem('singlePage','')
    }
  }
})