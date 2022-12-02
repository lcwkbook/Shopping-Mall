import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vant from 'vant'
import 'vant/lib/index.css'
import { VueMasonryPlugin } from 'vue-masonry'
import VueLazyLoad from 'vue-lazyload'
import LyTab from "ly-tab";
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';

Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(LyTab);
Vue.use(VueLazyLoad, {
  loading: require("@/assets/images/Logo/logo.png")
})
Vue.use(VueMasonryPlugin)
Vue.use(ElementUI)
Vue.use(Vant)
Vue.use(Vuex)
Vue.prototype.axios = axios;
Vue.config.productionTip = false

import './assets/css/style.scss'

// router.beforeEach((to, from, next) => {
//   let isLogin = sessionStorage.getItem('isLogin');
//   //注销
//   if (to.path == '/logout') {
//     //清空
//     sessionStorage.clear();
//     next({ path: '/login' });
//   } else if (to.path == 'login') {
//     //判断是否为空，不为空跳转至首页
//     if (isLogin != null) {
//       next({ path: '/' });
//     }
//   } else if (isLogin == null) {
//     next({ path: '/login' });
//   }

//   // next();
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')