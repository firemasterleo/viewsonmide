
<template>
    <!-- <div v-if="showOverlay" class="overlay">
    <h1>Loading...</h1>
  </div> -->
  <div class="routersection">
    <transition name="fade" mode="out-in">
    <router-view /> <!-- Content that will transition after loading -->
  </transition>
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
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>

<script setup>
import { useRouter } from 'vue-router';
import { onMounted, onBeforeUnmount } from 'vue';


import LenisScroll from './components/LenisScroll.vue';
import { ref } from "vue";
const showOverlay = ref(false);
const router = useRouter();

// router.beforeEach((to, from, next) => {
//   showOverlay.value = true; // Show transition screen

//   setTimeout(() => {
//     showOverlay.value = false; // Hide after 1s
//     next(); // Navigate to new route
//   }, 1000);
// });


</script>
