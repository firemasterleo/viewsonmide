<template>
    <div class="sectioncontainer">
      <div class="section">
        <div class="top-container">
            <div class="hero-text">
                <p>"Welcome to my world through my Views—where every image speaks and every frame holds a story."</p>
            </div>
        </div>
<div class="image-container">
    <div class="image image1">
        <img src="../assets/vom-image1.jpeg" loading="lazy" alt="">

    </div>
    <div class="image image2">
        <img src="../assets/vom-image6.jpeg" loading="lazy" alt="">
        
    </div>
    <div class="image image3">
        <img src="../assets/vom-image3.jpeg" loading="lazy" alt="">

    </div>
</div>
  
      </div>
    </div>
  </template>
  

<script script setup>

</script>

<style lang="scss" scoped>
 @import '/src/sass/variables';
.sectioncontainer {
  background-color: rgb(70, 96, 181); /* Solid black background */
  width: 100%;
  height: 100vh; /* Large enough to allow scrolling */
display: flex;
position: relative;
z-index: 9;


  .section {
background-image: url('https://www.transparenttextures.com/patterns/asfalt-dark.png');
background-color: #8E8E8E;

    width: 80rem;
    height: 100vh; /* Full viewport height */
    margin-inline: auto;
position: relative;
padding-inline: 1rem;
.top-container {
    .hero-text {
        margin-top: 12.5rem;
p {
    font-size: 22px;
    font-weight: 600;
    color: #2E2E2E;
}
    }
}

.image-container {
    position: absolute;
    bottom: 0;
    display: flex;

   align-items: flex-end;
    .image {
        flex: 1;

        img {
            align-items: flex-end;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .image1 {
        height: 12rem;
    }
    .image2 {
height: 17rem;
    }
    .image3 {
        height: 22rem;

    }
}
  }
}



@media (max-width: 800px) {
  .sectioncontainer {
    .section {
      width: 100vw;
      height: 100vh;
    }
  }
}
@media (max-width: 1200px) and (min-width: 800px) {
  .sectioncontainer {
    .section {

    }
  }
}
</style>