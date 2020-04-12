import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/Index.vue'
import MallIndex from '../components/MallIndex.vue'
import MallList from '../components/MallList'
import MallDetail from '../components/MallDetail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/MallIndex',
    name: 'mallindex',
    component: MallIndex
  },
  {
    path: '/MallList/:fid',
    name: 'malllist',
    component: MallList
  },
  {
    path: '/MallDetail/:lid',
    name: 'malldetail',
    component: MallDetail
  },
]

const router = new VueRouter({
  routes
})

export default router
