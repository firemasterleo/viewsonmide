
<template>
    <!-- <div v-if="showOverlay" class="overlay">
    <h1>Loading...</h1>
  </div> -->
  <div class="routersection">
    <router-view />

  </div>
</template>

<style lang="scss">
@use './sass/main.scss';


.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  background: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  z-index: 9999;
  opacity: 1;
  transition: opacity 0.5s ease-out;
}

</style>

<script setup>
import { useRouter } from 'vue-router';
import { onMounted, onBeforeUnmount } from 'vue';


import LenisScroll from './components/LenisScroll.vue';
import { ref } from "vue";
const showOverlay = ref(false);
const router = useRouter();

</script>
