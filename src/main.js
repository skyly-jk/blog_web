import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./module";

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import axios from 'axios'
import marked from 'marked'
import 'font-awesome/css/font-awesome.min.css';

Vue.config.productionTip = false
Vue.use(Antd)
Vue.use(mavonEditor)
Vue.prototype.$axios=axios

// markdown 转变 纯文本
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});
Vue.prototype.$marked=marked
Vue.filter("mdToStr",value=>{
  let htmlstr=marked(value)
  let reg=/<\/?.+?\/?>/g
  return htmlstr.replace(reg,'')
})

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
