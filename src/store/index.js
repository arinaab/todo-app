import { createStore } from 'vuex'
import done from './done'
import list from './list'
import deleted from './deleted'

export default createStore({
  modules: {
    done,
    list,
    deleted,
  }
})
