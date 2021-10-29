import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import TestDetail from "@/views/test-detail";
import TestsDetails from "@/views/tests-detail";

Vue.use(VueRouter)

const routes = [
  {path:'/', component:Home},
  {path:'/test-detail',component:TestDetail},
  {path:'/tests-details',component: TestsDetails}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
