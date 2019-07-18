import Vue from 'vue'
import App from './App.vue'
import '@/utils/generator'

//config
Vue.config.productionTip = false

//vue
new Vue({
  render: h => h(App),
}).$mount('#app')
