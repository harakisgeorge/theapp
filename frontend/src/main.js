import Vue from "vue";
import App from "./App.vue";
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueI18n from 'vue-i18n'
import en from './locals/en.json'
//import { VueStars } from 'vue-stars'
//import store from '@/utils/store'
//import router from './router'
import axios from 'axios'
export const defaultLocale = 'en'


export const languages = {
  en: en
}
const messages = Object.assign(languages)
Vue.use(VueMaterial)
Vue.use(VueI18n)
//Vue.component('vue-stars', VueStars)
Vue.config.productionTip = false;

axios.defaults.ports = 3000

const i18n = new VueI18n({
  locale: defaultLocale,
  fallbackLocale: 'en',
  messages
})

/*
new Vue({
  el: '#app',
  i18n: i18n,
  store,
  router,
  components: { App },
  template: '<App></App>'
})*/

new Vue({
  render: h => h(App),
  i18n: i18n
}).$mount("#app");
