import { createStore } from 'vuex'
import done from './done'
import list from './list'
import deleted from './deleted'
import users from './users'
import photos from "@/store/photos";

export default createStore({
  modules: {
    done,
    list,
    deleted,
    users,
    photos
  }
})
