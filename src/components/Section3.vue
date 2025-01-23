<template>
  <div class="section3container">
    <div class="section3">
      <div class="text-container">
        <div class="child">
          <div class="child1" ref="child1">
            <h1>text</h1>
          </div >
          </div>
        <div class="child">
          <div ref="child2">
            <h1>text</h1>
          </div>
  
        </div>
        <div class="child">
          <div ref="child3">
            <h1>text</h1>
          </div>
    
        </div>

      </div>
      <div class="video-container">
        <video autoplay muted loop playsinline>
          <source src="../assets/video2.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
.section3container {
  background-color: rgb(0, 0, 0); /* Solid black background */
  width: 100%;
  height: 200vh; /* Large enough to allow scrolling */
  position: relative;

  .section3 {
    position: sticky; /* Sticky positioning */
    top: 0;
    z-index: 0; /* Sticks to the top of the viewport */
    background: radial-gradient(ellipse 25% 30% at 55% 30%, #5b6457, #000000); /* Fancy background */
    width: 80rem;
    height: 100vh; /* Full viewport height */

    .video-container {
      width: 100%; /* Full width of the container */
      height: 100%; /* Full height of the container */

      video {
        object-fit: cover; /* Ensures video fills the container */
        width: 100%; /* Match container width */
        height: 100%; /* Match container height */
      }
    }
    .text-container {
      position: absolute;
      height: 100vh;
      width: 100%;
      // border: solid blue;
      display: flex;
      flex-direction: column;
      z-index: 1;

      .child {
        flex: 1;
        // border: solid red;
        overflow: hidden;
        div {
          border-top: solid black;
          background-color: rgb(23, 21, 21);
          height: 100%;

        }
      }


    }
  }
}

.text {
  /* Uncomment if needed */
  // position: sticky;
  // top: 0;
}

@media (max-width: 768px) {
  .section3container {
    .section3 {
      width: 100vw;
      height: 100vh;

      .video-container {
        width: 100%;
        height: 100%;

        video {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>


<script setup>
import { ref, onMounted } from 'vue';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const child1 = ref(null);
const child2 = ref(null);
const child3 = ref(null);



onMounted(() => {
  // Parallax effect for child elements on scroll
  gsap.to([child1.value], {
    y: '-100%', // Moves the element up by 120% of its height    ease: 'none', // Use 'none' for linear movement
    scrollTrigger: {
      trigger: child1.value, // The container that triggers the scroll
      start: 'top+=120  top+=0', // When the top of the trigger meets the top of the viewport
      end: 'bottom-=50  top+=0', // When the bottom of the trigger meets the bottom of the viewport
      scrub: 1, // Smooth scrubbing with a slight lag
      markers: true, // Uncomment to visualize start and end points
    },
  });
    // Parallax effect for child2 (slower speed)
    gsap.to(child2.value, {
    y: '-100%', // Moves child2 up by 80%
    ease: 'none',
    scrollTrigger: {
      trigger: child2.value,
      start: 'top+=0 top+=170', // When the top of the trigger meets the top of the viewport
      end: 'bottom-=150 top+=170',
      scrub: 0.8, // Smooth scrubbing with a slight lag
      // markers: true,
      
    },
  });

  // Parallax effect for child3 (fastest speed)
  gsap.to(child3.value, {
    y: '-100%', // Moves child3 up by 150%
    ease: 'none',
    scrollTrigger: {
      trigger: child3.value,
      start: 'top-=300 top+=170', // When the top of the trigger meets the top of the viewport
      end: 'bottom-=420 top+=170',
      scrub: 1, // Smooth scrubbing with a slight lag
      // markers: true,


    },
  });
});
</script>