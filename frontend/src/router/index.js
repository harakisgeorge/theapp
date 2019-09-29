import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/users/Login'
import Registration from '@/pages/users/Registration'
import Home from '@/pages/Home.vue'
import Practise from '@/pages/homebuttons/Practise'
import Discuss from '@/pages/homebuttons/Discuss'
import Material from '@/pages/homebuttons/Material'
import Quiz from '@/pages/homebuttons/Quiz'
import Profile from '@/pages/homebuttons/Profile'

import FinishQuiz from '@/pages/ExtraPages/FinishQuiz'

Vue.use(Router)

const router = new Router({
   mode: 'history',
   routes: [
     {
       path: '/login',
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
     },
     {
      path:'/material',
      name: 'Material',
      component:Material
    },
    {
      path:'/profile',
      name: 'Profile',
      component:Profile
    },
    {
      path:'/discuss',
      name: 'Discuss',
      component:Discuss
    },
    {
      path:'/practise/quiz',
      name: 'Quiz',
      component:Quiz
    },
    {
     path:'/practise/quiz/finish',
     name:'FinishQuiz',
     component:FinishQuiz
    }
    
   ]
 })
 
 export default router