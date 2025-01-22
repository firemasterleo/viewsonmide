<template>
    <div class="content">
        <div class="sidebarcontainer">
        <div class="sidebarsection">
            <div class="sidebar">
                <div class="user-profile">
                    <div class="profile-info">
                    <h2>Welcome {{ user.displayName }} !</h2>
                    </div>
                    <div class="avatar">
                        <!-- <input type="file" @change="handleFileUpload"> -->
                        <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='16' height='16'><path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path></svg>
                        <!-- <img src="../assets/profilepic.jpg" alt="prifile pic"> -->
                    </div>
                </div>
                <div class="usermenu">
                    <router-link to="/hub" exact-active-class="active">
                        <div class="home" @click="handleItemClick">
                            <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='18' height='18'><path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z"></path></svg>
    
                            <p>Home</p>
                        </div>
                    </router-link>
    
                    <router-link to="/hub/mymovies" exact-active-class="active">
                        <div class="mymovies" @click="handleItemClick">
                            <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='18' height='18'><path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm.001 6c-.001 0-.001 0 0 0h-.465l-2.667-4H20l.001 4zM15.5 15 10 18v-6l5.5 3zm-.964-6-2.667-4h2.596l2.667 4h-2.596zm-2.404 0H9.536L6.869 5h2.596l2.667 4zM4 5h.465l2.667 4H4V5z"></path></svg>
                            
                            <p>My Gems</p>
                        </div>
                    </router-link>

                    <div class="watchlist" @click="handleItemClick">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"/></svg>
                        
                        <p>My Watchlist</p>
                    </div>

                    <router-link to="/" exact-active-class="active">
                        <div class="mysquad" @click="handleItemClick">
                            <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='18' height='18'><path d="M16.604 11.048a5.67 5.67 0 0 0 .751-3.44c-.179-1.784-1.175-3.361-2.803-4.44l-1.105 1.666c1.119.742 1.8 1.799 1.918 2.974a3.693 3.693 0 0 1-1.072 2.986l-1.192 1.192 1.618.475C18.951 13.701 19 17.957 19 18h2c0-1.789-.956-5.285-4.396-6.952z"></path><path d="M9.5 12c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm1.5 7H8c-3.309 0-6 2.691-6 6v1h2v-1c0-2.206 1.794-4 4-4h3c2.206 0 4 1.794 4 4v1h2v-1c0-3.309-2.691-6-6-6z"></path></svg>
                            
                            <p>Community</p>
                        </div>
                    </router-link>
                    
                    <router-link to="/" exact-active-class="active">
                        <div class="discovergems" @click="handleItemClick">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M17.813 3.838A2 2 0 0 0 16.187 3H7.813c-.644 0-1.252.313-1.667.899l-4 6.581a.999.999 0 0 0 .111 1.188l9 10a.995.995 0 0 0 1.486.001l9-10a.997.997 0 0 0 .111-1.188l-4.041-6.643zM12 19.505 5.245 12h13.509L12 19.505zM4.777 10l3.036-5 8.332-.062L19.222 10H4.777z"/></svg>
                            
                            <p>Discover</p>
                        </div>
                    </router-link>
                </div>
                <div class="signout" @click="handleLogout" >
                        <button @click="handleItemClick" class="signoutbutton">Sign out</button>
                </div>
                <!-- <div class="categories">
    
                    <h3>Categories</h3>
                    
                    <div class="">
                        <p>Genre</p>
                    </div>
                    <div class="">
                        <p>Directors</p>
                    </div>
                    <div class="">
                        <p>Actors</p>
                    </div>
                    <div class="">
                      <p>Franchise</p>
                    </div>
                    <div class="">
                        <p>Mood</p>
                    </div>
                </div>
                <div class="discover">
                 
                        <h3>Discover</h3>
       
                    <div class="">      
                        <p>Upcoming Movies</p>
                    </div>
                    <div class="">      
                        <p>Community Favourites</p>
                    </div>
                    <div class="">
                        <router-link to="/hub/hiddengems" exact-active-class="active">
                            <p> Hidden Gems</p>
                            </router-link>
    
                    </div>
    
                </div> -->
            </div>
        </div>
        </div>
    </div>
</template>




<style lang="scss" scoped>
@import '../sass/variables';
@import '../sass/main';


.content {
    // border: solid green ;
    // overflow: hidden;
    
    .sidebarcontainer {
        // border: solid red;
        background-color: rgb(39, 39, 42);
        width: 100%;
        height: 40rem;
        padding-inline: 1rem;
        outline: none; /* Remove the default outline */
        box-shadow: 0 0 0 0.1px ;   //remove outline and use box shadow for thinnest line 
        


    .sidebarsection {
        // height: 50rem;
        width: 100%;
        // border: solid red;

        .sidebar {
            padding-top: 1.5rem;
            // border: solid blue;
            .user-profile {
                display: flex;
                align-items: center;
                justify-content: space-between;
                height: 2rem; /* Adjust height as needed */
                padding: 0.5rem;
                border-radius: 8px;
                margin-bottom: 1rem;
                .profile-info {
                    h2 {
                        font-size: 14px;
                
                    }
                }
                .avatar {
                    border: solid 1.5px rgb(113, 109, 109);
                    width: 1.5rem; /* Adjust size of the avatar container */
                    height: 1.5rem; /* Same as width for a square avatar */
                    border-radius: 50%; /* Round shape */
                    overflow: hidden; /* Ensures the image stays within the bounds */
                    margin-left: 1rem; /* Adjust spacing */
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    svg {
                        
                        fill: $textcolorwhite;
                    }
                    img {
                    width: 100%;
                    height: auto;
                    object-fit: cover; /* Ensures the image covers the container */
                    }
                }
            }


            .usermenu {
                // border: solid;
                display: flex;
                flex-direction: column;
                border-bottom: solid 1px rgba(255, 255, 255, 0.162);
                padding-bottom: 0.5rem;
                // gap: 1rem;
                div {
                    // border: solid;
                    padding-top: 0.5rem;
                    border-radius: 0.5rem;
                    padding-bottom: 0.5rem;
                    display: flex;
                    gap: 0.5rem;
                    align-items: center;
                    cursor: pointer;
                    padding-inline: 0.5rem;


                    p {
                        font-size: 14px;
                        color: $textcolorwhite;
                    }
                    svg {
                        fill: $textcolorwhite;
                    }

                    &:hover {
                        background-color: rgb(58, 59, 58);
                        transition: all 0.1s;

                        
                    }
                }
                .watchlist {
                    position: relative;
                }

                .active {
                    background-color: #eee; /* Highlight active tab */
                    border-radius: 0.5rem;
                    background-color: $bgcolordeepgreen;

                    :hover {
                        transition: all 0.1s;
                        background-color: $bgcolordeepgreen;


                        
                    }
                }
                
            }

            .signout {
                position: relative;
                top: 0.5rem;
                left: 0.5rem;
                width: fit-content;
                
                
                .signoutbutton {
                    // width: 4rem;
                    background-color: $bgcolordeepgreen;
                    border: none;
                    padding-block: 0.2rem;

                    padding-inline: 1rem;
                    border-radius: 1rem;
                    cursor: pointer;
                    color: $textcolorwhite;


                }
             
                    
                    &:hover {
                        // background-color: rgb(78, 137, 50);


                        
                    }
                    }
            .categories {
                // border: solid;
                padding-top: 0.7rem;
                padding-inline: 0.5rem;

                display: flex;
                flex-direction: column;
                
                h3 {
                    margin-bottom: 0.5rem;
                    font-size: 15px;
                    color: $textcolorwhite;
                }
                div {
                    height: 2rem;
                    display: flex;
                    align-items: center;
                    border-radius: 0.5rem;
                    cursor: pointer;

                    &:hover {
                        // background-color: rgb(86, 108, 78);
                        background-color: rgb(58, 59, 58);
                        // background-color: rgb(122, 143, 56);
                        transition: all 0.1s;

                        
                    }
                }
                p {
                    font-size: 13px;
                    margin-left: 0.7rem;
                    color: $textcolorwhite;
                    // height: 2rem;
                }
            }
            .discover {
                // border: solid;
                // padding-top: 0.7rem;
                padding-inline: 0.5rem;
                display: flex;
                flex-direction: column;
                // gap: 1rem;
                margin-top: 1rem;
                // border-bottom: solid 1px rgba(255, 255, 255, 0.162);
                padding-bottom: 1rem;

                h3 {
                    margin-bottom: 0.5rem;
                    font-size: 15px;
                    color: $textcolorwhite;

                }
                div {
                    height: 2rem;
                    display: flex;
                    align-items: center;
                    border-radius: 0.5rem;
                    cursor: pointer;

                    &:hover {
                        // background-color: rgb(86, 108, 78);
                        background-color: rgb(58, 59, 58);
                        // background-color: rgb(122, 143, 56);
                        transition: all 0.1s;

                        
                    }
                }
                p {
                    font-size: 13px;
                    margin-left: 0.7rem;
                    color: $textcolorwhite;

                }
            }

        }
    }
    
}


}


@media (max-width: 768px) {
    .content {

        .sidebarcontainer {
            // width: fit-content;
            height: calc(100vh - 2.8rem);
        }
    }

 } 




</style>

<script setup>
import { ref, computed } from 'vue';

import { useAuthStore } from '../stores/auth';
import { useToggleStore } from '../stores/toggleStore';
import { useRouter } from 'vue-router';



const toggleStore = useToggleStore();
const router = useRouter();
const authStore = useAuthStore();



const { user } = useAuthStore();
authStore.initAuth();


const handleItemClick = () => {
  if (toggleStore.isSidePanelOpen) {
    toggleStore.toggleSidePanel(); // used for buttons and  will toggle the side panel off
  }
};

const handleLogout = async () => {
  await authStore.logout();
  router.push('/');
};

</script>
