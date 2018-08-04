import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Interna from '@/components/Interna.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/interna/:id',
      name: 'Interna',
      component: Interna,
      props: true
    }
  ]
})