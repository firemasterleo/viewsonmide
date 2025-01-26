
<template>
  <div class="routersection">
    <router-view/>
  </div>
</template>

<style lang="scss">
@use './sass/main.scss';





</style>

<script setup>
import { useRouter } from 'vue-router';
import { onMounted, onBeforeUnmount } from 'vue';


import LenisScroll from './components/LenisScroll.vue';


const router = useRouter();

</script>
