<template>
    <div class="presection">
        <div class="section1">

            <header class="header">
                <div class="logo">
                    <h1>VOM</h1>

                </div>
                <nav class="nav-bar">
                    <ul class="nav-links">
                        <div class="nav-item">
                            <p>Portfolio</p>
                        </div>
                        <div class="nav-item">
                            <p>About</p>
                        </div>
 
                    </ul>
                </nav>
                


                <div class="download">
                    <button>Contact</button>
                </div>
                <div class="hamburger" :class="{ 'is-active': isActive }" @click="handleClick">
                            <span class="bar"></span>
                            <span class="bar"></span>
                            <span class="bar"></span>
                        </div>
            </header>


        </div>
    </div>

</template>

<style lang="scss" scoped>



.presection {
    // background-color: rgb(45, 45, 49);
    // border: yellow solid;
    width: 100%;
    display: flex;
    justify-content: center;

    overflow: hidden;
    position: fixed;
    top: 0;
    z-index: 10;

   .section1 {      
        // margin-inline: auto;
        // border: solid green;
        width: 80rem;
        height: 100%;
        // padding-inline: 1rem  ;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;

        .header {
            // border: solid red;
            // width: 62rem;
            width: 100%;
            // background-color: #23262276;
            // backdrop-filter: blur(17px);
            height: 4rem;
            // border-radius: 2rem;
            padding-left: 2rem;
            padding-right: 2rem;
            top: 0rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            overflow: hidden;

            .logo{
                // border-right: solid 2px #7cae65;
                // border: solid red;
                padding-right: 1rem;
                letter-spacing: 6px;
                color: #7e848a;
                font-size: 12px;



                img {
                    height: 1.8rem;
                    width: auto;
                }
            }
            .nav-bar {
                // border: solid red;


                .nav-links {
                    display: flex;
                    gap: 1rem;
                    width: 30rem;
                    min-width: fit-content;
                    overflow: hidden;

                    .popover {
                        padding: 1rem;
                        border: 1px solid #ccc;
                        background-color: #fff;
                        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                        border-radius: 4px;
                        width: 150px;
                        border: solid white;
                        height:50px;
                        }
                    .nav-item {
                        flex-shrink: 0;
                        position: relative;
                        // border : solid black;
                        // padding-inline: 0.2rem;
                        p {
                            font-size: 12px;
                            letter-spacing: 1px;
                            font-family: "Poppins", serif;
                            cursor: pointer;

                        }
                    }
                    :nth-child(1),:nth-child(2) {
                        display: flex;
                        justify-content: center;
                        // align-items: center;
                        // border: solid;
                        padding-right: 0rem;

                        svg {
                            // border: solid black;
                            margin-top: 3px;
                            // position: relative;
                            fill: white;
                        }
                    }
                }
                
            }

            .download {
                // border: solid black;
                // padding-left: 1rem;
                
                button {
                
                    font-family: "Poppins", serif;
                    font-size: 13px;
                    font-weight: 600;
                    height: 3rem;
                    padding-inline: 1.2rem;
                    border-radius: 1.5rem;
                    border: none;
                    background: linear-gradient(109.5deg, rgb(72, 203, 217) 11.2%, rgb(135, 218, 149) 91.1%);
                    color: rgb(255, 255, 255);
                    margin-left: 1rem;

                    cursor: pointer;
                    
                }
                button:hover {
                background: #fdfffc;
                color: rgb(0, 0, 0);

                }






            }
            .hamburger {
                // border: solid red;
                display: none;
            }

        }      
    }
}
@media (max-width: 768px) {

.presection {
  .section1 {
    width: 100%;
    .header {
    width: 100%;
    // border: solid red;
    padding-right: 0;

    .nav-bar {
        display: none;
    }
    .download {
        display: none;
    }
    
   

      .hamburger {
        -webkit-tap-highlight-color: transparent;
              
            //   border: solid red;
              position: relative;
              z-index: 25;
    
              display: flex;
              flex-direction: column;
              gap: 0.25rem;
              justify-content: center;
              background-color: none;
              align-items: center;
              cursor: pointer;
    
              width: 4rem;
    
              height: 3rem;
    
    
      
              .bar {
                  width: 26px;
                  height: 4px;
                  // background-color: rgba(255, 255, 255, 0.413);
                  background-color: #7e848a;

    
    
                  transition: transform 0.3s, opacity 0.3s;
                  
                }
              &.is-active {
                  
                  
                  .bar:nth-child(1) {
                      // background-color: rgba(255, 255, 255, 0.413);
    
                      transform: translateY(6px) rotate(45deg);
                    }
                  .bar:nth-child(2) {
                      // background-color: rgba(255, 255, 255, 0.413);
    
                      opacity: 0; }
                  .bar:nth-child(3) {
                      // background-color: rgba(255, 255, 255, 0.413);
    
                      transform: translateY(-6px) rotate(-45deg);
                  }
    
              }
      }
      .signout {
        // border: solid red;
          display: none;

        // button {
        //   // display: none;
        // }
      }

    }
                  }
                }



}




</style>