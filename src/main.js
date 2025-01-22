import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import piniaPersist from 'pinia-plugin-persistedstate';
import { createPinia } from 'pinia';

const app = createApp(App);

const pinia = createPinia(); // Create the Pinia instance
pinia.use(piniaPersist);


app.use(pinia);
app.use(router);

app.mount('#app');
