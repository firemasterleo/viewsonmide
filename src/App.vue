
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
const saveScrollPosition = () => {
  localStorage.setItem("scrollPosition", window.scrollY);
};

onMounted(() => {
  // Restore scroll position on page load
  const savedScrollPosition = localStorage.getItem("scrollPosition");
  if (savedScrollPosition) {
    window.scrollTo(0, savedScrollPosition);
  }

  // Save scroll position when scrolling
  window.addEventListener("scroll", saveScrollPosition);
});

onBeforeUnmount(() => {
  // Clean up event listener
  window.removeEventListener("scroll", saveScrollPosition);
});
</script>
