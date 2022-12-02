import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Main from '../views/Main'
import Home from '../views/Home'
import Stroll from '../views/Stroll'
import Cart from '../views/Cart'
import Personal from '../views/Personal'
import Commodity from '../views/Commodity'
import search from '../views/search'
import NotFound from '../views/NotFound'

import Rhizophora from '../componts/Home/commodity/Rhizophora'
import products from '../componts/Home/commodity/products'
import dried from '../componts/Home/commodity/dried'
import butcher from '../componts/Home/commodity/butcher'
import instant from '../componts/Home/commodity/instant'
import Cooked from '../componts/Home/commodity/Cooked'
import grain from '../componts/Home/commodity/grain'
import condiment from '../componts/Home/commodity/condiment'
import rice from '../componts/Home/commodity/rice'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main,
    children:[
      {
        path: '/',
        component: Home,
        children:[
          {
            path: '/',
            component: products
          },
          {
            path: '/Rhizophora',
            component: Rhizophora
          },
          {
            path: '/dried',
            component: dried
          },
          {
            path: '/butcher',
            component: butcher
          },
          {
            path: '/dried',
            component: dried
          },
          {
            path: '/instant',
            name: 'instant',
            component: instant
          },
          {
            path: '/Cooked',
            component: Cooked
          },
          {
            path: '/grain',
            component: grain
          },
          {
            path: '/condiment',
            component: condiment
          },
          {
            path: '/rice',
            component: rice
          },
        ]
      },
      {
        path: '/Stroll',
        name: 'Stroll',
        component: Stroll
      },
      {
        path: '/Cart',
        name: 'Cart',
        component: Cart
      },
      {
        path: '/Personal',
        name: 'Personal',
        component: Personal
      }
    ]
  },
  {
    path: '/search',
    name: 'search',
    component: search
  },
  {
    path: '/Commodity',
    name: 'Commodity',
    component: Commodity
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  // mode: 'history',//去除#
  base: __dirname,//根路径
  routes
})

export default router
