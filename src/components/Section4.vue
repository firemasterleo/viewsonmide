<template>
    <div class="sectioncontainer">
      <div class="section">
        <div class="work">

        </div>

  
      </div>
    </div>
  </template>
  

<script script setup>

</script>

<style lang="scss" scoped>
 @import '../sass/variables';
.sectioncontainer {
  background-color: rgb(70, 96, 181); /* Solid black background */
  width: 100%;
  height: 100vh; /* Large enough to allow scrolling */
display: flex;


  .section {
  background-color: rgb(70, 96, 181); /* Solid black background */
    width: 80rem;
    height: 100vh; /* Full viewport height */
    margin-inline: auto;

    .work {
        height: 15rem;
        background-color: white;
        position: sticky; /* Sticky positioning */
        top: 0;
    }

  }
}



@media (max-width: 800px) {
  .sectioncontainer {
    .section {
      width: 100vw;
      height: 100vh;

      .work {
        height: 15rem;
        background-color: $bgcolorwhite;
        position: relative; 
    }
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