<template>
    <div class="section3container">
        <div class="section3">
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
    // border: solid blue ;
    background-color: rgb(0, 0, 0);
    // background: radial-gradient(circle at 10% 20%, rgb(0, 0, 0) 0%, rgb(29, 27, 27) 90.2%);
    // height: 60rem;
    width: 100%;
    height: 100vh;
    display: flex;
    overflow: hidden;
    border: solid blue;


    .section3 {
        background: radial-gradient(ellipse 25% 30% at 55% 30%, #5b6457, #000000);
        width: 80rem;
        height: 100vh;
        margin-block: auto auto;
        position: relative;
        // flex-wrap: wrap;
        margin-inline: auto;
        // padding-top: 10rem;
        border: solid red;
    }

    
    .video-container {
        width: 100vw;
        height: 100vh;

video {
    object-fit: cover;
    // border: solid green;
    // width: auto;
    height: auto;
    // width: 100%;
}
}
}


@media (max-width: 768px) { 
        .section3container {
            // height: 60vh;
            border: solid blue;

            .section3 {
                width: 100vw;
                height: 100vh;

                .video-container {
                width: 100%;

                height: 100%;


                    video {
                        object-fit: cover;
                        border: solid green;
                        width: 100%;
                        height: 100%;
                    }
                }
            }

        }
     }
</style>