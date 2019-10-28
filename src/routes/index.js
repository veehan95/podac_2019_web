import Vue from 'vue';
import VueRouter from 'vue-router'

import Home from '@/views/home'
import Ratings from '@/views/ratings'
import Login from '@/views/login'
import Location from '@/views/location'
import Reward from '@/views/reward'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home',
  },
  {
    path: '/login',
    component: Login,
    name: 'Login',
    meta: { isPublic: true },
  },
  {
    path: '/rating',
    component: Ratings,
    name: 'Ratings',
    meta: {
      showOnNav: true,
      image: 'rating.png',
    },
  },
  {
    path: `/location/:id`,
    component: Location,
    name: 'Location',
  },
  {
    path: `/reward/`,
    component: Reward,
    name: 'Reward',
    meta: {
      showOnNav: true,
      image: 'gift.png',
    },
  },
]

const router = new VueRouter({routes})

router.beforeEach((to, from, next) => {
  if (!to.meta.isPublic){
    if (!router.app.$session.exists('loggined'))
      next('/login')
  }
  next()
})

export {
  router,
  routes,
}
