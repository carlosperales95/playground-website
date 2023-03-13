import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// import './assets/main.css'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')


// var offsets = document.getElementById('screen').getBoundingClientRect().top;
// var val = offsets + "px"
// console.log(val)

// document.documentElement.style.setProperty("--pip-top", val);
