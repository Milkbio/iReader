import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 全局样式
import '@/assets/css/global.scss'
// rem适配
import 'amfe-flexible'
// icomoon字体图标
import '@/assets/iconfonts/icomoon/style.css'
/*
import '@/assets/mixedfonts/cabin.css'
import '@/assets/mixedfonts/daysOne.css'
import '@/assets/mixedfonts/montserrat.css'
import '@/assets/mixedfonts/tangerine.css'
*/

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
