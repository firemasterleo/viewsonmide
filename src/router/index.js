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


});

export default router