import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/views/Home/index')
  },
  {
    path: '/distributionroom',
    component: () =>
      import('@/views/Home/DistributionRoom/distributionroom.vue')
  },
  {
    path: '/showroom',
    component: () => import('@/views/Home/ShowRoom/showroom.vue')
  },
  {
    path: '/dataroom',
    component: () => import('@/views/Home/DataRoom/dataroom.vue')
  },
  {
    path: '/dataroom-detail-:name',
    component: () =>
      import('@/views/Home/DataRoom/dataroom_detail/dataroom_detail.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
