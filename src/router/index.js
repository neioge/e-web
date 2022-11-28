import { createRouter, createWebHistory } from 'vue-router'
import SubMenuView from '@/views/SubMenuView.vue'
import GMenuView from '@/views/GMenuView.vue'

const routes = [
  {
    path: '/',
    name: 'SubMenu',
    component: SubMenuView
  },
  {
    path: '/about/:id',
    name: 'aboutParam',
    component: () => import('@/views/AboutView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue')
  },
  {
    path: '/gmenu/:subMenuId',
    name: 'gmenu',
    component: GMenuView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
