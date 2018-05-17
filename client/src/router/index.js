import Vue from 'vue'


import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
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
      name: 'HelloWorld',
      component: HelloWorld
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
    {
      path: '/register',
      name: 'Register',
      component: Register
    }, 
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
