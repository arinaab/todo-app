import { createRouter, createWebHistory } from 'vue-router'
import MainApp from '@/views/MainApp'
import MyDone from '@/views/MyDone'
import MyDeleted from '@/views/MyDeleted'
import CurrentTodo from '@/views/CurrentTodo'

const routes = [
  {
    path: '/',
    component: MainApp
  },
  {
    path: '/done',
    component: MyDone
  },
  {
    path: '/deleted',
    component: MyDeleted
  },
  {
    path: '/deleted/:id',
    name: 'currentTodo',
    component: CurrentTodo
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
