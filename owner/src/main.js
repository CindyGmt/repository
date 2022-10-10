import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router/router'
import store from './store/index'
import './assets/css/iconfont.css'
import './assets/css/change.css'
import utils from './utils/utils'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$utils = utils

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
