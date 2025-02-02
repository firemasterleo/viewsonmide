
<template>
      <!-- <div v-if="showOverlay" class="overlay">
    <h1>Loading...</h1>
  </div> -->
    <div class="header">
      <Header/>
    </div>
  
  
    <div class="routersection">
    <!-- Use v-slot to access the routed component -->
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <!-- Dynamically render the component with the transition -->
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
  
      <!-- <div class="footer">
      <Footer/>
    </div> -->
  </template>
  
  <style lang="scss" scoped>
// @use '/src/sass/main.scss';



.fade-enter-active, .fade-leave-active {
  transition: opacity 600ms ease all; /* Smooth fade-in and fade-out effect */
}

.fade-enter-from, .fade-leave-to {
  opacity: 0; /* Start and end with opacity 0 */
}

  
  </style>
  
  <script setup>
  import Header from '../components/Header.vue'; // Adjust path as necessary
  import Footer from '../components/Footer.vue'; // Adjust path as necessary
  import Home from '../pages/Home.vue'; // Adjust path as necessary

import { onMounted, onBeforeUnmount } from 'vue';

  
  
  import { useRouter } from 'vue-router';
  
  const router = useRouter();

  // const showOverlay = ref(false);
// router.beforeEach((to, from, next) => {
//   showOverlay.value = true; // Show transition screen

//   setTimeout(() => {
//     showOverlay.value = false; // Hide after 1s
//     next(); // Navigate to new route
//   }, 1000);
// });


  </script>
  