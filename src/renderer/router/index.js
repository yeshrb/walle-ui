import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'design-page',
      component: require('@/pages/design').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
