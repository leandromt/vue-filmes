import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Filme from '@/components/Filme.vue'

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
      path: '/filme/:id',
      name: 'Filme',
      component: Filme,
      props: true
    }
  ]
})