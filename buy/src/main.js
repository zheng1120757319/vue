// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//fastclick解决手机端300ms的延迟
import fastClick from "fastclick"
fastClick.attach(document.body)

//border.css reset.css统一样式
import "./assets/style/border.css"
import "./assets/style/reset.css"

//mint-ui
import { Header } from "mint-ui";
Vue.component(Header.name, Header)

//vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

//mui
import "../src/assets/mui/css/mui.css"
import "../src/assets/mui/css/app.css"


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
