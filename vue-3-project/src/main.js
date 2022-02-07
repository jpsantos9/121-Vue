import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)
app.use(router)           // to include router in app
app.use(VueAxios, axios)  // to include axios in app
app.mount('#app')

