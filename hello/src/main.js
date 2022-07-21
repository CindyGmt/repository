import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueI18n from 'vue-i18n'
import router from './router/router'
import utils from './utils/common'
import App from './App.vue'
import store from './store/index'
import bus from './utils/bus'

Vue.prototype.$utils = utils
Vue.prototype.$bus = bus
Vue.use(ElementUI)
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'cn',    // 语言标识
  //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'cn': require('./lang/cn'),   // 中文语言包
    'en': require('./lang/en')    // 英文语言包
  }
})
Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  store,
  render: h => h(App),
}).$mount('#app')
