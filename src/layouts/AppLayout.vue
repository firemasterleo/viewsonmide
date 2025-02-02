
<template>
  <!-- v-if="showOverlay"  -->
    <div v-if="showOverlay"  class="overlay">
      <div class="top" ref="top">
        
      </div>
      <div class="bottom" ref="bottom">

      </div>
    <div class="vom">
      <div class="v" ref="v">
        <h3>
          V
        </h3>
      </div>
      <div class="image" ref="logo">
        <img src="../assets/vom_logo.png" loading="lazy" alt="">   
      </div>
      <div class="m" ref="m">
          <h3>M</h3>
      </div>
    </div>
  </div>



    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <!-- Dynamically render the component with the transition -->
        <component :is="Component" />
      </transition>
    </router-view>
    
</template>

<style lang="scss">
@use '../sass/main.scss';
@import '../sass/variables.scss';


.overlay {
  position: fixed;
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, 0);
  color: white;
  display: flex;
  
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  z-index: 9999;
  opacity: 1;
  transition: opacity 0.5s ease-out;

  .top {
    // border :solid;
    position:absolute;
    top:0;
    height: 50%;
    width: 100%;
    background: $bgcolorwhite;

    
  }
  .bottom {
    bottom: 0;
    height: 50%;
    width: 100%;
    // border :solid;
    position:absolute;
    background: $bgcolorwhite;
  }


  .vom {
    display: flex;
    align-items: center;
    justify-content: center;
    
    gap:4px;
    // border: solid red;
    height: 2.5rem;
    overflow: hidden;

    .v {
      font-size: 40px;
      color: $textcolorblack;
      // border: solid red;
    }
    .m {
      font-size: 40px;
      color: $textcolorblack;
      
      // border: solid red;
    }

    .image {
      width: 2.5rem;
      height: 2.5rem;
      // border:solid;

      img {
        width:100%;
      height:100%;
      object-fit: cover;
      // border: solid;
      }
    }
  }


}
.fade-enter-active, .fade-leave-active {
  transition: opacity 500ms ease-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

</style>

<script setup>
import { useRouter } from 'vue-router';
import { useRoute} from 'vue-router';

import { onMounted, onBeforeUnmount } from 'vue';
import Header from '../components/Header.vue'; // Adjust path as necessary



import LenisScroll from '../components/LenisScroll.vue';
import gsap from "gsap";

import { ref, onUnmounted } from "vue";

let vomAnimation; // Store animation reference


const showOverlay = ref(true);
let overlayTimeout;

const route = useRoute();
const router = useRouter();

// router.beforeEach((to, from, next) => {
//   showOverlay.value = true; // Show transition screen

//   setTimeout(() => {
//     showOverlay.value = false; // Hide after 1s
//     next(); // Navigate to new route
//   }, 1000);
// });

onMounted(() => {
  overlayTimeout = setTimeout(() => {
    showOverlay.value = false;
  }, 2000);

  vomAnimation = gsap.timeline({ defaults: { duration: 0.6, ease: "power2.out" } })
    .from(".v", { y: -100, opacity: 0 }) // V enters
    .from(".image", { y: 100, opacity: 0 }, "-=0.6") // O enters slightly before V finishes
    .from(".m", { x: 100, opacity: 0, }, "-=0.6") // M enters slightly before O finishes
    .to(".v", { y: 100, opacity: 0, delay: 0.5 }) // V exits
    .to(".image", { y: -100, opacity: 0 }, "-=0.6") // O exits slightly before V finishes
    .to(".m", { x: 100, opacity: 0 }, "-=0.6") // M exits slightly before O finishes

    .to(".top", { y: "-100%", duration: 1, ease: "power4.inOut" }, "-=0.5")
    .to(".bottom", { y: "100%", duration: 1, ease: "power4.inOut" }, "<"); // Move down
});
onUnmounted(() => {
  clearTimeout(overlayTimeout); // Prevent timeout memory leaks
  if (vomAnimation) vomAnimation.kill(); // Clean up GSAP animation to prevent memory leaks

});
</script>
