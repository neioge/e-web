import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {vueAccordion} from 'vue-accordion'

createApp(App)
    .use(store)
    .use(router)
    .use(VueAxios, axios)
    .use(vueAccordion)
    .mount('#app')
