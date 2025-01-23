<template>
    <div class="section2container">
        <div class="section2">
            <div class="section2veil"></div>
            <div class="text">
                <h1>Views On Mide</h1>
                <p>"Welcome to my world through my Views. Here, every picture tells a story, captures a moment, and brings emotions to life. Explore my portfolio and see the world as I see it—full of beauty, light, and untold stories."</p>
            </div>
            <div class="section2-image">
                <img src="https://res.cloudinary.com/dgdnews6i/image/upload/v1737432540/vom-image1_eg1w3p.jpg" loading="lazy" alt="">
                <img src="https://res.cloudinary.com/dgdnews6i/image/upload/v1737434479/vom-image6_wbl0in.jpg" loading="lazy" alt="">
                <img src="https://res.cloudinary.com/dgdnews6i/image/upload/v1737609964/vom-image3_sclpta.jpg" loading="lazy" alt="">
                <img src="https://res.cloudinary.com/dgdnews6i/image/upload/v1737609964/vom-image4_ryex35.jpg" loading="lazy" alt="">
                <img src="https://res.cloudinary.com/dgdnews6i/image/upload/v1737609964/vom-image5_jqrlkm.jpg" loading="lazy" alt="">
                <img src="https://res.cloudinary.com/dgdnews6i/image/upload/v1737609964/vom-image7_svvxdb.jpg" loading="lazy" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.section2container {
    border: solid blue ;
    background-color: rgb(0, 0, 0);
    // background: radial-gradient(circle at 10% 20%, rgb(0, 0, 0) 0%, rgb(29, 27, 27) 90.2%);
    height: 60rem;
    width: 100%;
    display: flex;
    overflow: hidden;

    .section2 {
        background: radial-gradient(ellipse 25% 30% at 55% 30%, #5b6457, #000000);
        width: 80rem;
        height: 100%;
        margin-block: auto auto;
        position: relative;
        // flex-wrap: wrap;
        margin-inline: auto;
        // padding-top: 10rem;

        .section2veil {
            // border: solid red;
            position: absolute;
            z-index: 1;
            height: 100%;
            width: 100%;
            background: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0.548), /* Least transparent at the top */
                rgba(0, 0, 0, 0.05)  /* Darker and less transparent at the bottom */
            );
        }

        .text {
            position: relative;
            z-index: 2;
            color: #7e848a;
            padding-inline: 1rem;
            padding-right: 4rem;
            margin-bottom: 1rem;
        }

        .section2-image {
            // border: solid red;
            // width: 5%;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
            // height: 30rem;
            position: relative;
            // z-index: ;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
}
</style>
