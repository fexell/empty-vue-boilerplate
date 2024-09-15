import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'
import router from './router'

import './assets/styles/tw.css'
import './assets/styles/main.sass'

library.add(fab)
library.add(far)
library.add(fas)

const app = createApp(App)

app.component('fa-icon', FontAwesomeIcon)

app.use(createPinia())
app.use(router)

app.mount('#App')
