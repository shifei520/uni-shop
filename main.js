import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
Vue.filter('formatDate', (date) => {
				const fDate = new Date(date)
				const year = fDate.getFullYear()
				const month = fDate.getMonth().toString().padStart(2, 0)
				const day = fDate.getDate().toString().padStart(2, 0)
				return year + '-' + month + '-' + day
			})
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif
// 引入字体图标
import '@/static/font/iconfont.css'
// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif