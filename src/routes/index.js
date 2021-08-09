import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/routes/Home'
import Movie from '@/routes/Movie'

Vue.use(VueRouter)

export default new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/movie/:id',
      component: Movie
    }
  ]
})