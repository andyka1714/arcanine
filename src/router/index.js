import Vue from 'vue'
import Router from 'vue-router'
import OverView from '@/pages/OverView'
import Test from '@/pages/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/overview'
    },
    {
      path: '/overview',
      name: 'OverView',
      component: OverView
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
