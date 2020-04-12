import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入axios组件
import axios from "axios"
axios.defaults.baseURL = "http://127.0.0.1:5500/"
Vue.prototype.axios = axios

// 引入和配置mint-ui组件库
import MintUI from "mint-ui";
import "mint-ui/lib/style.css"
Vue.use(MintUI)

// 引入公共文件
import "./common/base.css"
import "./common/free.css"
import "./iconfont/iconfont.css"

Vue.config.productionTip = false

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
