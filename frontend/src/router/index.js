import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/users/Login.vue'

Vue.use(Router)

const router = new Router({
   mode: 'history',
   routes: [
     {
       path: '/user',
       name: 'Login',
       component: Login
     },
   ]
 })
 
 export default router