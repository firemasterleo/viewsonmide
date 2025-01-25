<template>
    <div class="sectioncontainer">
      <div class="section">
        <div class="work-header">
                <h1>WORK</h1>
        </div>
        <div class="works">
            <div class="works-child">
                <div class="image">
                    <img src="../assets/vom-image1.jpeg" loading="lazy" alt="">
                </div>
            </div>

            <div class="works-child">
                <div class="image">
                    <img src="../assets/vom-image6.jpeg" loading="lazy" alt="">
                </div>
            </div>

            <div class="works-child">
                <div class="image">
                    <img src="../assets/vom-image3.jpeg" loading="lazy" alt="">

                </div>
            </div>

            <div class="works-child">
                                <div class="image">
                                    <img src="../assets/vom-image4.jpeg" loading="lazy" alt="">

                </div>
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
        // border: solid red;

        position: sticky; /* Sticky positioning */
        top: 0;
        color: $bgcolorblack;

        h1 {
            margin: 0;
      font-size: calc(25vw + 10vh); /* Dynamically adjust font size */
      text-align: center;
      color: #333;
      width: 100%;
        }
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

            .image {
                width: 100%;
                height: 100%;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

            }

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
        display: flex;
        justify-content: center;
        align-items: center;
        
        
        h1 {
            margin: 0;
      font-size: calc(10vw + 10vh); /* Dynamically adjust font size */
      text-align: center;
      color: #333;
      width: 100%;
        }
        
    }
    .works {
        padding-inline: 0.5rem;
        .works-child {
            height: 21rem;
            width: 100%;
            border: none;

            .image {
                width: 100%;
                height: 100%;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

            }


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