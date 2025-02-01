
<template>
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
@use '/src/sass/main.scss';

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease-in; /* Smooth fade-in and fade-out effect */
}

.fade-enter, .fade-leave-to {
  opacity: 0; /* Start and end with opacity 0 */
}


  
  </style>
  
  <script setup>
  import Header from '../components/Header.vue'; // Adjust path as necessary
  import Footer from '../components/Footer.vue'; // Adjust path as necessary
  import Home from '../pages/Home.vue'; // Adjust path as necessary
  
  
  import { useRouter } from 'vue-router';
  
  const router = useRouter();

  </script>
  