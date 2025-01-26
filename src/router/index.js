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
      if (savedPosition) {
        // When coming back from another route, restore the scroll position
        return savedPosition;
      } else {
        // Otherwise, scroll to top (or another position as needed)
        return { x: 0, y: 0 };
      }
    },
  
});
window.addEventListener('scroll', () => {
  localStorage.setItem('scrollPosition', window.scrollY);
});

// On page load, restore scroll position if available
if (localStorage.getItem('scrollPosition')) {
  window.scrollTo(0, parseInt(localStorage.getItem('scrollPosition')));
}

export default router