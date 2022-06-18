import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
const url = 'https://jsonplaceholder.typicode.com/posts'
export default url

createApp(App).use(store).use(router).mount('#app')
