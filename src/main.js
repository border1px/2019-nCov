import Vue from 'vue'
import App from './App.vue'
import router from './router'
import _ from 'lodash'
import 'echarts/lib/chart/map'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/visualMap'
import 'echarts/map/js/world'
import './styles/init.styl'

Vue.prototype._ = _
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
