import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/home.vue'
import Message from "../components/message/message.vue"
import Member from "../components/member/member.vue"
import Mine from "../components/mine/mine.vue"
import homeBuy from "../components/home/homeBuy.vue"
import homeDetails from "../components/home/homeDetails.vue"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/home"
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: "/message",
      component: Message
    },
    {
      path: "/member",
      component: Member
    },
    {
      path: "/mine",
      component: Mine
    },
    {
      path: "/home/homebuy",
      component: homeBuy
    },
    {
      path: "/home/homedetails/:id",
      component: homeDetails
    }
  ],
  linkActiveClass: "mui-active"
})
