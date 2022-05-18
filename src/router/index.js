import Vue from 'vue'
import VueRouter from 'vue-router'
import StoragePage from '../views/StoragePage.vue'
import MidCirclePage from '../views/MidCirclePage.vue'
import ConcurrencyPage from '../views/ConcurrencyPage.vue'
import CircleTagPage from '../views/CircleTagPage.vue'
import BlocksPage from '../views/BlocksPage.vue'
import BlockGenPage from '../views/BlockGenPage.vue'
import NodesPage from '../views/NodesPage.vue'
import Home from '../views/Home.vue'
import CirclePage from '../views/CirclePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
  },{
    path: '/home',
    component: Home,
  },{
    path: '/storagepage',
    component: StoragePage,
  },{
    path: '/midcirclepage',
    component: MidCirclePage,
  },{
    path: '/concurrencypage',
    component: ConcurrencyPage,
  },{
    path: '/circletagpage',
    component: CircleTagPage,
  },{
    path: '/blockspage',
    component: BlocksPage,
  },{
    path: '/blockgenpage',
    component: BlockGenPage,
  },{
    path: '/nodespage',
    component: NodesPage,
  },{
    path: '/Circlepage',
    component: CirclePage
  }
]

const router = new VueRouter({
  routes
})

export default router
