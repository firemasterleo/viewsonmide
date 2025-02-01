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
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (to.hash) {
            return resolve({ selector: to.hash });
          } else if (savedPosition) {
            return resolve(savedPosition);
          } else {
            resolve(document.getElementById("app").scrollIntoView({ behavior: "smooth" }));
          }
        }, 400);
      });
     
    },
});

export default router