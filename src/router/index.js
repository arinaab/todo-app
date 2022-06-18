import { createRouter, createWebHistory } from 'vue-router'
import MainApp from '@/views/MainApp'
import MyDone from '@/views/MyDone'
import MyDeleted from '@/views/MyDeleted'
import CurrentTodo from '@/views/CurrentTodo'
import PostsList from '@/views/PostsList'
import UsersApp from '@/views/UsersApp'
import CurrentUser from '@/components/CurrentUser'
import PhotosApp from '@/views/PhotosApp'
import CurrentPhoto from "@/components/CurrentPhoto";

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
  },
  {
    path: '/posts',
    name: 'posts',
    component: PostsList
  },
  {
    path: '/users',
    name: 'users',
    component: UsersApp
  },
  {
    path: '/users:id',
    name: 'currentUser',
    component: CurrentUser
  },
  {
    path: '/photos',
    name: 'photos',
    component: PhotosApp,
  },
  {
    path: '/photos:id',
    name: 'currentPhoto',
    component: CurrentPhoto
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
