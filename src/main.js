import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import './plugin/element.js'

// 引入全局的css文件
import './assets/css/global.less'

// 引入字体
import '../public/static/font/circleTag-text-font.css'

// // / 无缝滚动插件
// import scroll from 'vue-seamless-scroll'
// Vue.use(scroll)
// //or you can set componentName default componentName is vue-seamless-scroll
// Vue.use(scroll,{componentName: 'scroll-seamless'})

// import { config } from '@jiaminghi/data-view'

// Vue.use(config)

axios.defaults.baseURL = 'https://result.eolinker.com/iwvT4g78dfde82d24f1a538e8e5ff9d7b8c9fef930893b2?uri='
// 挂载axios
// 在别的组件中用 this.$http
Vue.prototype.$http = axios

Vue.config.productionTip = false

// 挂载全局 echarts this.$echarts
Vue.prototype.$echarts = window.echarts


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
