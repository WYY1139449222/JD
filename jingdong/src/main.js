import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// vant 全部引入方式
import vant from 'vant'
import 'vant/lib/index.css'

import  './less/public.less'
Vue.use(vant);


Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



