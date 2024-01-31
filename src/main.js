import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import router from './router';
import store from './store';
import '@fortawesome/fontawesome-free/css/all.css';

// import { getAuth } from 'firebase/auth';

import { initializeApp } from "firebase/app";
// import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBz8LU-QC5H1auMAx-m2111x7RwdHni6f8",
  authDomain: "education-portal-3b5ca.firebaseapp.com",
  projectId: "education-portal-3b5ca",
  storageBucket: "education-portal-3b5ca.appspot.com",
  messagingSenderId: "760749680475",
  appId: "1:760749680475:web:996b60b37dabb9280e1c7e"
};

const app = createApp(App);
initializeApp(firebaseConfig);
// const db = getDatabase(app); // Correctly use getDatabase method
// const auth = getAuth();
// app.config.globalProperties.$auth = auth;

// Make axios available globally in your app
app.config.globalProperties.$axios = axios;

app.use(store).use(router).mount('#app');
