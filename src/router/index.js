import { createRouter, createWebHistory } from "vue-router";
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import AppLayout from '../layouts/AppLayout.vue';

const router = createRouter({
    history: createWebHistory(), 
      routes: [
        
        {
            path: '/',
            component: AppLayout,
            children: [
              {
                path: '',
                name: 'Home',
                component: Home
              },
              {
                path: 'About',
                name: 'About',
                component: About
              }
            ]

        },
        
    ],
    scrollBehavior(to, from, savedPosition) {
      return { top: 0, left: 0 }; // Always scroll to the top for every route change
    }
    
});

export default router