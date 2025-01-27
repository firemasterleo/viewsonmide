
<template>
    <div class="header">
      <Header/>
    </div>
  
  
      <div class="routersection">
        <router-view/>
      </div>
  
      <!-- <div class="footer">
      <Footer/>
    </div> -->
  </template>
  
  <style lang="scss" scoped>
@use '/src/sass/main.scss';

  

  
  </style>
  
  <script setup>
  import Header from '../components/Header.vue'; // Adjust path as necessary
  import Footer from '../components/Footer.vue'; // Adjust path as necessary
  import Home from '../pages/Home.vue'; // Adjust path as necessary
  
  
  import { useRouter } from 'vue-router';
  
  const router = useRouter();

  </script>
  