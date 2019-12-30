import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ExtendObject from '@/components/ExpendObject'

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
    }
  ]
})
