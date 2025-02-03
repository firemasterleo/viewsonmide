<template>
            <div class="section1container">
            <div class="herosection">
                <img class="hero-img" src="../assets/vom-image1.jpeg" loading="lazy" alt="">   
                <div class="veil">



                </div>

            </div>
        </div>
</template>

<style lang="scss" scoped>
    .section1container {
        // border: yellow solid;
        background-color: rgb(118, 118, 205);
        height: 130vh;
        width: 100%;
        display: flex; //you need this to make fixed with children responsive
        // position: relative;
        // z-index: 1;
        
        .herosection {      
            // border: solid blue;
            background-color: #232323; 
            margin-inline: auto;
            width: 100%;
            height: 100%;
            justify-content: center;
            position: relative;
            z-index: 0;
            // overflow: hidden;
            .hero-img {
                // border: solid red;
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center 0%;
                position: absolute;
                // top: 0rem;

            }

            .veil {
            // border: solid yellow;
            // background-color: rgba(0, 0, 0, 0.893);
            background: linear-gradient(
                to bottom,
                rgb(0, 0, 0), /* Least transparent at the top */
                rgba(0, 0, 0, 0.352)  /* 0.854 Darker and less transparent at the bottom */
            );
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            z-index: 1;
            }

            .herotext {
            // border: solid blue;
            width: 100%;
            height: fit-content;
            position: relative;
            top: 14.2rem;
            z-index: 2;
            background: linear-gradient(to left, #7cae65, #ffffff);
            background-clip: text;
            -webkit-background-clip: text;
            
            
            .toptext {
                // border: solid red;
                -webkit-text-fill-color: transparent;
                text-align: center;
                font-size: 64px;
                font-weight: 700;

                line-height: 7rem;
                // font-family: "Poppins", serif;
            }

            .textsequence {
                // border: solid red;
                width: 100%;
                margin: auto;
                background: linear-gradient(to left, #7cae65, #ffffff);
                background-clip: text;
                -webkit-background-clip: text;
                position: relative;
                
            
        
                .box {
                    background: linear-gradient(to left, #7cae65, #ffffff);
                background-clip: text;
                -webkit-background-clip: text;
                    // border: solid blue;
                    -webkit-text-fill-color: transparent;
                    text-align: center;
                    font-size: 64px;
                    // font-family: "Poppins", serif;
                    font-weight: 700;
                    line-height: 7rem;
                    opacity: 0;  //secret ingredient for text transition
                    position: absolute;
                    width: 100%;
            
                    
                }
                .fuel {
                    animation: ani1 10s infinite;
                }
                .cng {
                    animation: ani2 10s infinite;
                }
                .emergency {
                    animation: ani3 10s infinite;
                }
                .oil {
                    animation: ani4 10s infinite;
                }
                .battery {
                    animation: ani5 10s infinite;
                }

                @keyframes ani1 {
                    0%{
                        opacity: 0;
                        transform: translateY(3px); /* Slide up from below */
                        
                    }
                    20%{
                        opacity: 1;
                        transform: translateY(0); /* Reset position */

                    }
                    25% {
                        opacity: 0;
                        transform: translateY(-3px); /* Slide up from below */

                    }
                }
                @keyframes ani2 {
                    20%{
                        opacity: 0;
                        transform: translateY(3px); /* Slide up from below */

                    }
                    40%{
                        opacity: 1;
                        transform: translateY(0px); /* Slide up from below */

                    }
                    45% {
                        opacity: 0;
                        transform: translateY(-3px); /* Slide up from below */

                    }
                }
                @keyframes ani3 {
                    40%{
                        opacity: 0;
                        transform: translateY(3px); /* Slide up from below */

                    }
                    60%{
                        opacity: 1;
                        transform: translateY(0px); /* Slide up from below */

                    }
                    65% {
                        opacity: 0;
                        transform: translateY(-3px); /* Slide up from below */

                    }
                }
                @keyframes ani4 {
                    60%{
                        opacity: 0;
                        transform: translateY(3px); /* Slide up from below */

                    }
                    80%{
                        opacity: 1;
                        transform: translateY(0px); /* Slide up from below */

                    }
                    85% {
                        opacity: 0;
                        transform: translateY(-3px); /* Slide up from below */

                    }
                }
                @keyframes ani5 {
                    80%{
                        opacity: 0;
                        transform: translateY(3px); /* Slide up from below */

                    }
                    99%{
                        opacity: 1;
                        transform: translateY(0px); /* Slide up from below */

                    }
                    100% {
                        opacity: 0;
                        transform: translateY(-3px); /* Slide up from below */

                    }
                }
            }
    
            .qrcode {
            
                border: none;
                margin-top: 8.5rem;
                padding-top: 0.5rem;
                padding-left: 0.5rem;
                padding-right: 1rem;
                padding-bottom: 0.5rem;
                border-radius: 1rem;
                position: relative;
                background-color: #232323;
                width: fit-content;
                height: fit-content;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 1rem;
                margin-inline: auto;
                transition: all 0.4s ease-out;
                cursor: pointer;


            
                    img {
                        width: 4.5rem;
                        height:4.5rem;
                        background-color: #7cae65;
                    }
                p {
                // font-family: "Poppins", serif;
                font-size: 14px;
                border: none;
                // text-align: center;
                // padding-block: 2px;
                }
            }
            .qrcode:hover {
                scale: 114%;
                transition: all 0.5s ease-out;
            }
            }


        }

    }

    @media (max-width: 768px) { 
        .section1container {
            height: 60vh;
            .herosection {
                .herotext {
                    .toptext {
                        font-size: 30px;
                        line-height: 5rem;
                    }
                }
            }
        }
     }
</style>


<script setup>

</script>