import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../view/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../view/About.vue')
  },
  {
    path:'/varhome',
    name:'varhome',
    component: () => import('../view/hivar/varhome/index')
  }
  // {
  //   path: 'cropper_page',
  //   name: 'cropper_page',
  //   meta: {
  //     icon: 'md-crop',
  //     title: '图片裁剪'
  //   },
  //   component: () => import('../view/components/cropper/cropper.vue')
  // },
]

const router = new VueRouter({
  routes
})

export default router
