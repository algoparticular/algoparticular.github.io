import { createApp } from "vue";
import { createI18n } from 'vue-i18n';

import './css/style.css';
import { messages } from "./json/copy.json";

import App from "./App.vue";

//Router
import router from "./router";

/////////////////////////////
//Firebase //////////////////
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCiuSoJrYIzNaZCANvuYeHftgOfSUhbAAw",
    authDomain: "algo-particular-app-c3d88.firebaseapp.com",
    projectId: "algo-particular-app-c3d88",
    storageBucket: "algo-particular-app-c3d88.appspot.com",
    messagingSenderId: "975873740508",
    appId: "1:975873740508:web:3f819422d1fdddacccee19"
  };

// Initialize
initializeApp(firebaseConfig);
/////////////////////////////

// Initialize Lang
// localStorage.lang != null ? localStorage.lang : 
const i18n = createI18n({
  locale: 'es', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
});
///////////////////


const app = createApp(App);

app.use(i18n);
app.use(router);

app.mount("#app");