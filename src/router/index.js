import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import ExtendObject from '../components/ExtendObject'
import LikedObjects from '../components/LikedObject'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/:Pid',
      name: 'ExtendObject',
      component: ExtendObject
    },
    {
      path: '/liked',
      name: 'LikedObjects',
      component: LikedObjects
    }
  ]
})
