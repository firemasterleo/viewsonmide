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
    width: 100%;
    height: fit-content;
    // overflow-x: hidden ;

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


// const buttons = Array(6).fill(null);
// const tiles = Array(6).fill(null);
const activeIndex = ref(0);

const buttons = [
  { 
    image: new URL('../assets/truckpic2.png', import.meta.url).href,  // Vite way to handle image import
    text: 'Fuel'
  },
  { 
    image: new URL('../assets/cng.png', import.meta.url).href,
    text: 'CNG'
  },
  { 
    image: new URL('../assets/tyrespic.png', import.meta.url).href,
    text: 'Tyres'
  },
  { 
    image: new URL('../assets/engineoil.png', import.meta.url).href,
    text: 'Engine Oil'
  },
  { 
    image: new URL('../assets/carbattery.png', import.meta.url).href,
    text: 'Battery'
  },
  { 
    image: new URL('../assets/rescuemepic.png', import.meta.url).href,
    text: 'Rescue me!'
  }
];


// Example tiles content
const tiles = ref([
  {
    title: "24/7 fuel service, at petrol station rates.",
    description: "Enjoy our contactless fuel delivery straight to your car with flexible scheduling. Easy booking, at your convenience!",
    image: new URL('../assets/truckpic2.png', import.meta.url).href,  // Vite way to handle image import
    buttonText: "Discover Fuel Delivery"
  },
  {
    title: "Stay ahead of the world with cheaper, green energy.",
    description: " Eco-friendly fuel solutions for vehicles at your door step in minutes!.",
    image: new URL('../assets/cng.png', import.meta.url).href,
    buttonText: "Discover CNG"
  },
  {
    title: "Tired tyres? Cengreen will upgrade your tread today.",
    description: "Avoid pointless trips to the garage when we can treat your ride to something fresh at your doorstep.",
    image: new URL('../assets/tyrespic.png', import.meta.url).href,
    buttonText: "Discover tyre change"
  },
  {
    title: "Engine oil with free 10-point check",
    description: "Mobile oil change, free 10-point check & original filter replacement. Your car deserves the best.",
    image: new URL('../assets/engineoil.png', import.meta.url).href,
    buttonText: "Discover engine oil"
  },
  {
    title: "Stay charged with our battery change service.",
    description: "Unsure which battery you need? No bother – our specialist technicians will suggest the best boost for you.",
    image: new URL('../assets/carbattery.png', import.meta.url).href,
    buttonText: "Discover Battery Change"
  },
  {
    title: "Stuck at the roadside? No sweat.",
    description: "Ran out of fuel? Got a puncture? Battery died? Need a tow? Just CENGREEN it and we’ll be to you in minutes.",
    image: new URL('../assets/rescuemepic.png', import.meta.url).href,
    buttonText: "Read More"
  }
]);

const handleTileButtonClick = (index) => {
  console.log(`Button clicked on tile ${index + 1}`);
  // Add any additional functionality here
};

const setActive = (index) => {
  activeIndex.value = index;
};

function toggleFaq(item) {
  const isExpanded = item.classList.contains("expanded");

  // Close all other items
  document.querySelectorAll(".faq-item").forEach((faq) => faq.classList.remove("expanded"));

  // Toggle the clicked item
  if (!isExpanded) {
    item.classList.add("expanded");
  }
}
</script>