import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import Recommend from '@/views/recommend'
import Singer from '@/views/singer'
import Search from '@/views/search'
import Toplist from '@/views/toplist'

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: Recommend,
    name: "recommend"
  },
  {
    path: '/search',
    component: Search,
    name: "search"
  },
  {
    path: '/singer',
    component: Singer,
    name: "singer"
  },
  {
    path: '/top-list',
    component: Toplist,
    name: "top-list"
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
