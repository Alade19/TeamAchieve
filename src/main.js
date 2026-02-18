import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import 'primeicons/primeicons.css'
import "@fontsource/noto-sans"
import "@fontsource/lora"

const app = createApp(App)

app.use(router)

app.mount('#app')
