import Vue from 'vue'


import Router from 'vue-router'
import Home from '@/components/Home'
import Register from '@/components/Register'

import Favourites from '@/components/Favourites'
import NavBar from '@/components/NavBar'
import Login from '@/components/Login'
import Trending from '@/components/Trending'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/n',
      name: 'NavBar',
      component: NavBar
    },
    {
      path: '/trending',
      name: 'Trending',
      component: Trending
    },
    // {
    //   path: '/about',
    //   name: 'About',
    //   component: About
    // },
    {
      path: '/favourites',
      name: 'Favourites',
      component: Favourites
    },
    // {
    //   path: '/register',
    //   name: 'Register',
    //   component: Register
    // }, 
    // {
    //   path: '/login',
    //   name: 'Login',
    //   component: Login
    // }
  ]
})
