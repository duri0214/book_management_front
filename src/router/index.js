import Vue from 'vue'
import VueRouter from 'vue-router'
import BookList from '@/components/BookList'
import Book from '@/components/Book.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'books',
    component: BookList
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Book,
    props: routes => ({
      id: Number(routes.params.id)
    })
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
