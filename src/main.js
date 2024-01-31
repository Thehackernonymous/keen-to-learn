// import { createApp } from 'vue'
// import App from './App.vue';
// import axios from 'axios';
// import router from './router';
// import store from './store';

// createApp(App).use(store).use(router).mount('#app')


import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import router from './router';
import store from './store';

const app = createApp(App);

// Make axios available globally in your app
app.config.globalProperties.$axios = axios;

app.use(store).use(router).mount('#app');
