import { createApp } from "vue";
// import { createI18n } from 'vue-i18n';

import './css/style.css';
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

/////////////////////////////
// Multilanguage ////////////
// const messages = {
//   es: {
//       message: {
//           hello: 'Algo Particular cuenta las historias de una partícula que al volverse consciente de sí, aprende a navegar el Universo libremente.\nBajo la premisa hermética "Como es arriba, es abajo", transmite su verdad: todos somos iguales, todos somos uno, (no) somos (de) aquí.',
//           seeGallery: 'Ver galería completa',
//           shops: 'Tiendas',
//           shopFC: 'Tienda FlashCookie, sólo para Argentina',
//           shopTL: 'Tienda Threadless, envíos a todo el mundo',
//           shopHEN: 'Colecciona partículas en Hic et Nunc!',
//           copyrightA: 'Ideado por',
//           copyrightB: 'co-creado con el ❤ de una',
//           copyrightC: 'comunidad',
//           copyrightApp: '2022 copyright ©',
//           community: 'Algo Particular no podría buscar y transmitir su propósito si no fuera por otras partículas que, a lo largo del camino, co-crean o colaboran con el desarrollo y expresión de este Universo.\nA todas ellas les estoy infinitamente agradecido.',
//           communityA: 'Protones',
//           communityB: 'Neutrones',
//           communityC: 'Electrones',
//           back: 'Volver',
//           cardMessageIntro: 'Una parte de nuestros átomos, y los de todo lo que existe, vienen navegando el Universo desde el principio de los tiempos. Esas partículas cargan con cientos de miles de historias, y cada una de ellas nos comparte un aprendizaje.\n\nCierra tus ojos e intenciona el mensaje que estas partículas tienen para vos.\n\nCuando estés listx, presiona aquí debajo para verlo.',
//           cardMessageButton: 'Descubre tu carta',
//           cardAfirmation: 'Afirmación',
//           cardInvitation: 'Invitación',
//           notFound: 'Sólo un espacio vacío...',
//           notFoundCopy: 'Con o sin error, te invito a aprovechar esta oportunidad para estar aquí. No se necesita ninguna máscara social en esta página 404.\n\nUna simple oportunidad para cerrar los ojos y exhalar todo el aire. Liberar todos los músculos de la cara, haciendo movimientos muy lentos mientras escudriñamos nuestro cuerpo.\n\n¿Cómo he llegado a esta página? ¿En qué frecuencia estoy vibrando?\n\nY cuando lo necesites, vuelve a abrir los ojos. Sonríe y expresa tu gratitud a alguien, a algo, y especialmente a ti mismo.\n\nGracias, ahora puedes seguir navegando.',
//           notFoundButton: 'Volver al sitio',
//         }
//   },
//   en: {
//       message: {
//           hello: 'Algo Particular tells the stories of a particle that upon becoming self-aware, learns to navigate the Universe freely.\nUnder the Hermetic premise "As above, so below", it conveys its truth: we are all the same, we are all one, we are (not from) here.',
//           seeGallery: 'View full gallery',
//           shops: 'Shops',
//           shopFC: 'Flashcookie store, only in Argentina',
//           shopTL: 'Threadless store, shipping worldwide from the US',
//           shopHEN: 'Collect particles on Hic et Nunc!',
//           copyrightA: 'Ideated by',
//           copyrightB: 'co-created with the ❤ of a',
//           copyrightC: 'community',
//           copyrightApp: '2022 copyright ©',
//           community: 'Algo Particular could not seek and transmit its purpose if it were not for other particles that, along the way, co-create or collaborate with the development and expression of this Universe.\nTo all of them I am infinitely grateful.',
//           communityA: 'Protons',
//           communityB: 'Neutrons',
//           communityC: 'Electrons',
//           back: 'Back',
//           cardMessageIntro: 'Part of our atoms, and those of everything that exists, were navigating around the Universe since the beginning of time. Those particles carry thousands stories, and each one of them shares a learning with us.\n\nClose your eyes and intend the message these particles have for you.\n\nWhen you are ready, click below to see it. (Currently only in Spanish)',
//           cardMessageButton: 'Discover your card',
//           cardAfirmation: 'Afirmation',
//           cardInvitation: 'Invitation',
//           notFound: 'Just empty space...',
//           notFoundCopy: 'Error or not, I invite you to take this opportunity to be here. No social mask is needed on this 404 page.\n\nA simple opportunity to close your eyes and exhale all the air. Releasing every muscle in our face, making very slow movements while we scan our body.\n\nHow did I get to this page? What frequency am I vibrating at?\n\nAnd when you need it, open your eyes again. Smile and express gratitude to someone, to something, and specially to yourself.\n\nThank you, now you can continue browsing.',
//           notFoundButton: 'Go back to site',
//         }
//   }
// }

// Initialize Lang
//localStorage.lang != null ? localStorage.lang : 
// const i18n = createI18n({
//   locale: 'es', // set locale
//   fallbackLocale: 'en', // set fallback locale
//   messages, // set locale messages
// });
///////////////////


const app = createApp(App);
app.use(router);
// app.use(i18n);

app.mount("#app");