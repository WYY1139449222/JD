import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import {verifyLogin} from './api/index'
// vant 全部引入方式
import vant from 'vant'
import 'vant/lib/index.css'

import  './less/public.less'
Vue.use(vant);


// router.beforeEach((to,from,next)=>{
//   console.log(to);
  
//   verifyLogin().then(data=>{
//     if(data.code==0){
//       next()
//     }else{
//       next(from)
//     }
//   })
 
// })

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



