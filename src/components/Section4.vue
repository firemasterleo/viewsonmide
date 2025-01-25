<template>
    <div class="sectioncontainer">
      <div class="section">
        <div class="work-header">

        </div>
        <div class="works">
            <div class="works-child">
                
            </div>

            <div class="works-child">
                
            </div>

            <div class="works-child">
                
            </div>

            <div class="works-child">
                
            </div>


        </div>
        <div class="infinite-scroll">

        </div>


  
      </div>
    </div>
  </template>
  

<script script setup>

</script>

<style lang="scss" scoped>
 @import '../sass/variables';
.sectioncontainer {
    background-color: #111315;
    width: 100%;
  height: fit-content; /* Large enough to allow scrolling */
display: flex;


  .section {
  background-color: $bgcolorwhite; /* Solid black background */
    width: 80rem;
    height: 100%; /* Full viewport height */
    margin-inline: auto;

    .work-header {
        height: 100vh;
        background-color: white;

        position: sticky; /* Sticky positioning */
        top: 0;
    }
    .works {
        height: fit-content;
        // border: solid red;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .works-child {
            // height: 24rem;
            // border: solid blue;
            background-color: $bgcolorblack;

        }

    }
    .infinite-scroll {
        height: 7rem;

        // border: solid blue;
        border-radius: 0 0 2rem 2rem;
        background-color: $bgcolorwhite;
    
    }
  }
}



@media (max-width: 800px) {
  .sectioncontainer {
    .section {
      width: 100vw;
      border-radius: 0 0 1rem 1rem;


      .work-header {
        height: 20rem;
        background-color: $bgcolorwhite;
        position: relative; 
        
    }
    .works {
        padding-inline: 0.5rem;
        .works-child {
            height: 21rem;
            border: none;


        }
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