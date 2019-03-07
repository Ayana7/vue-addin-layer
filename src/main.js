import Vue from 'vue'
import App from './App.vue'
import vueAddinPlayer from './lib/index.js'

Vue.use(vueAddinPlayer)

new Vue({
  el: '#app',
  render: h => h(App)
})
