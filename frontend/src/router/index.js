import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/users/Login'
import Registration from '@/pages/users/Registration'
import Home from '@/pages/Home.vue'
import Practise from '@/pages/homebuttons/Practise'

Vue.use(Router)

const router = new Router({
   mode: 'history',
   routes: [
     {
       path: '/user',
       name: 'Login',
       component: Login
     },

     {
       path: '/registration',
       name: 'Registration',
       component: Registration
     },
     {
       path: '/home',
       name: 'Home',
       component: Home
     },
     {
       path: '/practise',
       name: 'Practise',
       component: Practise
     }

   ]
 })
 
 export default router