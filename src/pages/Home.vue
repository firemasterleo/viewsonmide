<template>
    <div class="body">
        <HeroSection />
        <Section2 />
        <Section3 />
        <Section4 />
        <Footer />

      </div>

</template>

<style lang="scss" scoped>

 .body {
    background-color: black;
    // border: solid red;
    width: 100vw;
    height: fit-content;
    // overflow-x: scroll ;

    // margin-inline: auto;
}


</style>

<script setup>
import { ref } from 'vue';

import HeroSection from '../components/HeroSection.vue'; // Adjust path as necessary
import Section2 from '../components/Section2.vue'; // Adjust path as necessary
import Section3 from '../components/Section3.vue'; // Adjust path as necessary
import Section4 from '../components/Section4.vue'; // Adjust path as necessary
import Footer from '../components/Footer.vue'; // Adjust path as necessary

</script>