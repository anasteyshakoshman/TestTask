import Vue from 'vue'
import Router from 'vue-router'
import Object from '@/components/Object'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Object',
      component: Object
    }
  ]
})
