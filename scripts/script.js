import CommunityParticle from './CommunityParticle.js';
import MessageCard from './MessageCard.js';
import ModalGallery from './ModalGallery.js';
import ModalCard from './ModalCard.js';
import LayoutHeader from './LayoutHeader.js';
import LayoutFooter from './LayoutFooter.js';
import LayoutHeaderApp from './LayoutHeaderApp.js';
import LayoutFooterApp from './LayoutFooterApp.js';

// Configure Vue here
const VueApp = {
    components: {
        CommunityParticle,
        MessageCard,
        ModalGallery,
        ModalCard,
        LayoutHeader,
        LayoutHeaderApp,
        LayoutFooter,        
        LayoutFooterApp
    },

    // Put variables here
    data() {
        return {            
            showModal: false,
            modal: {
                image: '',
                caption: ''
            },
            gallery: [],

            shops: {
                current_fc: 'assets/shop/fc_0.jpg',
                current_tl: 'assets/shop/tl_0.jpg',
                flashcookie: 4,
                threadless: 5
            },

            particles: {},

            cards: [],
            loadingCard: false,
            showCard: false,
            randomCard: {},
        }
    },    
  
    // Functions go here
    methods: {
        langChanged(lang) {
            localStorage.setItem("lang", lang);
        },
        populateFromJson() {
            //Particles object
            fetch('../json/community.json').then(response => response.json()).then((data) => this.particles = data);

            //Gallery object
            fetch('../json/gallery.json').then(response => response.json()).then((data) => this.gallery = data);
            
            //Cards object
            fetch('../json/cards.json').then(response => response.json()).then((data) => this.cards = data);
        },

        openGalleryModal(i) {
            this.modal.image = this.gallery[i].image;
            this.modal.caption = this.gallery[i].title;

            this.showModal = true;
        },
        closeGalleryModal() {
            this.showModal = false;

            this.modal.image = '';
            this.modal.caption = '';
        },

        updateShops(){
            let tlIndex = 0;
            let fcIndex = 0;
            let merch = this.shops;
            setInterval(function () {             
                fcIndex < merch.flashcookie-1 ? fcIndex++ : fcIndex = 0;
                merch.current_fc = 'assets/shop/fc_'+ fcIndex +'.jpg';
            
                tlIndex < merch.threadless-1 ? tlIndex++ : tlIndex = 0;
                merch.current_tl = 'assets/shop/tl_'+ tlIndex +'.jpg';
             }, 3000);
        },

        zoomAnim(event) {
            anime({
                targets: event.target,
                scale: 1.1,
                fill: '#F26A25'
            });
        },
        leaveZoomAnim(event) {
            anime({
                targets: event.target,
                scale: 1,
                fill: '#10100F'
            });
        },

        closeCardModal() {
            this.showCard = false;
            this.randomCard = {};

            this.loadingCard = false;
        },
        renderMessage() {
            let randomNumber = Math.random() * (this.cards[localStorage.lang].length - 1);
            randomNumber = randomNumber.toFixed();

            this.randomCard = this.cards[localStorage.lang][randomNumber];
            this.showCard = true;
        },
        loadingCardAnim() {
            var self = this;
            anime({
              targets: '#cardLoader path',
              strokeDashoffset: [0, anime.setDashoffset],
              easing: 'easeInQuint',
              duration: 2700,
              delay: 500,
              complete: function(){
                self.renderMessage();
              }
            });
        },
        getMessage() {            
            this.showCard = false;
            this.loadingCard = true;
            this.loadingCardAnim();
        },        
    },

    // Code that will run as soon as app is ready
    mounted() {
        //Anim background
        let grainAnim = anime({
            targets: '#grain',
            keyframes: [
                {backgroundPosition: '-1px bottom'},
                {backgroundPosition: 'left .5px'}, 
                {backgroundPosition: '0px top'}, 
                {backgroundPosition: 'right -1px'}
                ],
            duration: 600,
            easing: 'steps(4)',
            loop: true,
            autoplay: true
        });
        
        this.updateShops();

        this.populateFromJson();

        if (localStorage.lang == null) {
            localStorage.setItem("lang", 'es');
        }

        //Progressive Web App
        var registration = null;

        if ("serviceWorker" in navigator) {
        window.addEventListener("load", function() {
            navigator.serviceWorker
            .register("/scripts/serviceWorker.js")
            .then(function(reg) {
                registration = reg;
                console.log("Service Worker registered");
            })
            .catch(err => console.log("Service Worker not registered", err))
        })
        }
    }
  };

  const messages = {
    es: {
        message: {
            hello: 'Algo Particular cuenta las historias de una partícula que al volverse consciente de sí, aprende a navegar el Universo libremente.\nBajo la premisa hermética "Como es arriba, es abajo", transmite su verdad: todos somos iguales, todos somos uno, (no) somos (de) aquí.',
            shops: 'Tiendas',
            shopFC: 'Tienda FlashCookie, sólo para Argentina',
            shopTL: 'Tienda Threadless, envíos a todo el mundo',
            shopHEN: 'Colecciona partículas en Hic et Nunc!',
            copyrightA: 'Ideado por',
            copyrightB: 'co-creado con el ❤ de una',
            copyrightC: 'comunidad',
            community: 'Algo Particular no podría buscar y transmitir su propósito si no fuera por otras partículas que, a lo largo del camino, co-crean o colaboran con el desarrollo y expresión de este Universo.\nA todas ellas les estoy infinitamente agradecido.',
            communityA: 'Protones',
            communityB: 'Neutrones',
            communityC: 'Electrones',
            back: 'Volver',
            cardMessageIntro: 'Una parte de nuestros átomos y los de todo lo que existe fueron vienen vagando por el Universo desde el principio de los tiempos. Esas partículas cargan con cientos de miles de historias, y cada una de ellas nos comparte un aprendizaje.\n\nCierra tus ojos e intenciona tu mensaje particular de hoy.',
            cardMessageButton: 'Descubre tu carta',
            cardAfirmation: 'Afirmación',
            cardInvitation: 'Invitación',
            notFound: 'Sólo un espacio vacío...',
            notFoundCopy: 'Con o sin error, te invito a aprovechar esta oportunidad para estar aquí. No se necesita ninguna máscara social en esta página 404.\n\nUna simple oportunidad para cerrar los ojos y exhalar todo el aire. Liberar todos los músculos de la cara, haciendo movimientos muy lentos mientras escudriñamos nuestro cuerpo.\n\n¿Cómo he llegado a esta página? ¿En qué frecuencia estoy vibrando?\n\nY cuando lo necesites, vuelve a abrir los ojos. Sonríe y expresa tu gratitud a alguien, a algo, y especialmente a ti mismo.\n\nGracias, ahora puedes seguir navegando.',
            notFoundButton: 'Volver al sitio',
          }
    },
    en: {
        message: {
            hello: 'Algo Particular tells the stories of a particle that upon becoming self-aware, learns to navigate the Universe freely.\nUnder the Hermetic premise "As above, so below", it conveys its truth: we are all the same, we are all one, we are (not from) here.',
            shops: 'Shops',
            shopFC: 'Flashcookie store, only in Argentina',
            shopTL: 'Threadless store, shipping worldwide from the US',
            shopHEN: 'Collect particles on Hic et Nunc!',
            copyrightA: 'Ideated by',
            copyrightB: 'co-created with the ❤ of a',
            copyrightC: 'community',
            community: 'Algo Particular could not seek and transmit its purpose if it were not for other particles that, along the way, co-create or collaborate with the development and expression of this Universe.\nTo all of them I am infinitely grateful.',
            communityA: 'Protons',
            communityB: 'Neutrons',
            communityC: 'Electrons',
            back: 'Back',
            cardMessageIntro: 'Part of our atoms and those of everything that exists were wandering around the Universe since the beginning of time. Those particles carry hundreds of thousands of stories, and each one of them shares with us a learning.\n\nClose your eyes and intend your particular message today. (Currently only in Spanish)',
            cardMessageButton: 'Discover your card',
            cardAfirmation: 'Afirmation',
            cardInvitation: 'Invitation',
            notFound: 'Just empty space...',
            notFoundCopy: 'Error or not, I invite you to take this opportunity to be here. No social mask is needed on this 404 page.\n\nA simple opportunity to close your eyes and exhale all the air. Releasing every muscle in our face, making very slow movements while we scan our body.\n\nHow did I get to this page? What frequency am I vibrating at?\n\nAnd when you need it, open your eyes again. Smile and express gratitude to someone, to something, and specially to yourself.\n\nThank you, now you can continue browsing.',
            notFoundButton: 'Go back to site',
          }
    }
  }
  
  // Initialize Lang
  const i18n = VueI18n.createI18n({
    locale: localStorage.lang != null ? localStorage.lang : 'es', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
  });

  // Initialize Vue
  Vue.createApp(VueApp).use(i18n).mount('#app');
  