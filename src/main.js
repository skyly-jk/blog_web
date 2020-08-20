import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./module";

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import axios from 'axios'
Vue.config.productionTip = false
Vue.use(Antd)
Vue.use(mavonEditor)
Vue.prototype.$axios=axios



new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
