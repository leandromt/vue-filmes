import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Filme from '@/components/Filme.vue'
import Favoritos from '@/components/Favoritos.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
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
    },
    {
      path: '/favoritos/',
      name: 'Favoritos',
      component: Favoritos
    }
  ]
})