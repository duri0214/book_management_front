import Vue from 'vue'
import VueRouter from 'vue-router'
import BookList from '@/components/BookList'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'books',
    component: BookList
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
