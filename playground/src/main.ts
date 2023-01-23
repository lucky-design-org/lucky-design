import { createApp } from 'vue'
import './style.css'
import LuckyDesign from 'lucky-design'
import App from './App.vue'

const app = createApp(App)

app.use(LuckyDesign)

app.mount('#app')
