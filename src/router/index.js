import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/ebook'
  },
  {
    path: '/ebook',
    name: 'ebook',
    component: () => import(/* webpackChunkName 'ebook' */ '@/views/ebook/'),
    children: [
      {
        path: ':filename',
        component: () => import(/* webpackChunkName 'ebook' */ '@/components/ebook/ebookReader')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
