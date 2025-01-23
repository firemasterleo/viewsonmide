<template>
  <div class="section3container">
    <div class="section3">
      <div class="text-container">
        <div class="child">
          <div class="child1" ref="child1">
            <h1> STORY</h1>
            <p>Each photograph is a chapter, capturing emotions, and memories that come together to tell a story you'll cherish forever.</p>
          </div >
          </div>
        <div class="child">
          <div class="child2" ref="child2">
            <h1>VISION</h1>
            <p>Every frame is a canvas where imagination meets vision, turning fleeting moments into breathtaking visual masterpieces.</p>
          </div>
  
        </div>
        <div class="child">
          <div class="child3" ref="child3">
            <h1>QUALITY</h1>
            <p>Crafted with precision and care, each image reflects a timeless standard of excellence, preserving your moments in stunning detail.</p>
          </div>
    
        </div>

      </div>
      <div class="video-container">
        <video autoplay muted loop playsinline>
          <source src="https://res.cloudinary.com/dgdnews6i/video/upload/v1737609992/video2_aogmfr.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
 @import '../sass/variables';
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
          padding-inline: 0.5rem;
          border-top: solid 1px black;
          background-color: rgb(23, 21, 21);
          background-color: $bgcolorwhite;
          height: 100%;
          display: flex;
        flex-direction: column;
        justify-content: center;
        // align-items: center;
        
        h1 {
          font-family: Lato;
          font-size: 72px;
          font-weight: 400;
          color: $textcolorblackdeeper;

        }

        p {
          // font-family: Grotesk;
          font-weight: 500;
          color: $textcolorblack;

          

        }

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
    y: '-105%', // Moves the element up by 120% of its height    ease: 'none', // Use 'none' for linear movement
    scrollTrigger: {
      trigger: ".child1", // The container that triggers the scroll
      start: '120  top', // When the top of the trigger meets the top of the viewport
      end: 'bottom  top', // When the bottom of the trigger meets the bottom of the viewport
      scrub: 1, // Smooth scrubbing with a slight lag
      markers: true, // Uncomment to visualize start and end points
    },
  });
    // Parallax effect for child2 (slower speed)
    gsap.to(child2.value, {
    y: '-105%', // Moves child2 up by 80%
    ease: 'none',
    scrollTrigger: {
      trigger: ".child1",
      start: 'center top', // When the top of the trigger meets the top of the viewport
      end: 'bottom top',
      scrub: 1, // Smooth scrubbing with a slight lag
      // markers: true,
      
    },
  });

  // Parallax effect for child3 (fastest speed)
  gsap.to(child3.value, {
    y: '-105%', // Moves child3 up by 150%
    ease: 'none',
    scrollTrigger: {
      trigger: ".child1",
      start: 'center+=20 top', // When the top of the trigger meets the top of the viewport
      end: 'bottom+=30 top',
      scrub: 1, // Smooth scrubbing with a slight lag
      // markers: true,


    },
  });
});
</script>