
<template>
    
</template>
<script>

import  gsap  from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from 'lenis'
gsap.ticker.lagSmoothing(0);

const lenis = new Lenis();
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
    // console.log('Ticker is running!');
  lenis.raf(time * 1800);
});

</script>

