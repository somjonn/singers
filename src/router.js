import { createRouter, createWebHistory } from 'vue-router'
// import Home from './components/Home.vue';
// import Singers from './components/Singers.vue';
// import About from './components/About.vue';
// import Webplayer from './components/Webplayer.vue';


const routes = [
   {
      name:'Home',
      path: '/',
      component: () => import('./components/Home.vue'),
   },
   {
      name:'Singers',
      path: '/singers',
      component: () => import('./components/Singers.vue'),

   },
   {
      name:'About',
      path: '/about',
      component: () => import('./components/About.vue'),

   },
   {
      name:'Webplayer',
      path: '/webplayer',
      component: () => import('./components/Webplayer.vue'),

   },
];

const router = createRouter({
   history: createWebHistory(),
   routes
})

export default router;
