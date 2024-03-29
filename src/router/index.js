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
    path: '/gmenu/:subMenuId',
    name: 'gmenu',
    component: GMenuView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue')
  },
  {
    path: '/about/:id',
    name: 'aboutParam',
    component: () => import('@/views/AboutView.vue')
  },
  {
    path: '/GScreen/:id',
    name: 'GScreen',
    component: () => import('@/views/GScreenView.vue')
  },
  {
    path:'/acc',
    name:'acc',
    component:()=>import('@/views/AccordionTest/AccordionList.vue')
  }
  ,
  {
    path:'/acc2',
    name:'acc2',
    component:()=>import('@/views/AccordionTest/AccordionView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
