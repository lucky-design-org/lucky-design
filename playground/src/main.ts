import { createApp } from 'vue'
import './style.css'
import LuckyDesign from 'lucky-design'
import App from './App.vue'
import 'lucky-design/dist/style.css'
import router from './router'

const app = createApp(App)

app.use(LuckyDesign)
app.use(router)

app.mount('#app')
