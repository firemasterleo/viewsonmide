<template>
    <div class="body">

        <AboutSection1 />
        <Footer />

      </div>

</template>

<style lang="scss" scoped>

 .body {
    background-color: black;
    // border: solid red;
    width: 100%;
    height: fit-content;
    // overflow-x: hidden ;
}


</style>

<script setup>
import { ref } from 'vue';

import AboutSection1 from '../components/about/AboutSection1.vue'; // Adjust path as necessary
import Footer from '/src/components/Footer.vue'; // Adjust path as necessary

</script>