import Particle from './Particle.js';
import Card from './Card.js';

// Configure Vue here
const VueApp = {
    components: {
        Particle,
        Card
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
            randomNumber: '',
            randomCard: {
                name: '',
                description: '',
                image: '',
                afirmation: '',
                invitation: ''
            },
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
        openModal(i) {
            this.modal.image = this.gallery[i].image;
            this.modal.caption = this.gallery[i].title;

            this.showModal = true;
        },
        closeModal() {
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
        renderMessage() {
            this.loadingCard = false;

            this.randomNumber = Math.random() * (this.cards.length - 1);
            this.randomNumber = this.randomNumber.toFixed();
            
            this.randomCard = this.cards[this.randomNumber];
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
            this.randomNumber = '';
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
    }
  };

  const messages = {
    es: {
        message: {
            hello: 'Algo Particular cuenta las historias de una partícula que al volverse consciente de sí, aprende a navegar el Universo libremente. Bajo la premisa hermética "Como es arriba, es abajo", transmite su verdad: todos somos iguales, todos somos uno, (no) somos (de) aquí.',
            shops: 'Tiendas',
            shopFC: 'Tienda FlashCookie, sólo para Argentina',
            shopTL: 'Tienda Threadless, envíos a todo el mundo',
            shopHEN: 'Colecciona partículas en Hic et Nunc!',
            copyrightA: 'Ideado por',
            copyrightB: 'co-creado con el ❤ de una',
            copyrightC: 'comunidad',
            community: 'Algo Particular no podría buscar y transmitir su propósito si no fuera por otras partículas que, a lo largo del camino, co-crean o colaboran con el desarrollo y expresión de este Universo. A todas ellas les estoy infinitamente agradecido.',
            communityA: 'Protones',
            communityB: 'Neutrones',
            communityC: 'Electrones',
            back: 'Volver',
            aMessage: 'Cierra tus ojos e intenciona tu mensaje particular de hoy.',
            aMessageButton: 'Descubre tu carta',
            afirmation: 'Afirmación',
            invitation: 'Invitación',
          }
    },
    en: {
        message: {
            hello: 'Algo Particular tells the stories of a particle that upon becoming self-aware, learns to navigate the Universe freely. Under the Hermetic premise "As above, so below", it conveys its truth: we are all the same, we are all one, we are (not from) here.',
            shops: 'Shops',
            shopFC: 'Flashcookie store, only in Argentina',
            shopTL: 'Threadless store, shipping worldwide from the US',
            shopHEN: 'Collect particles on Hic et Nunc!',
            copyrightA: 'Ideated by',
            copyrightB: 'co-created with the ❤ of a',
            copyrightC: 'community',
            community: 'Algo Particular could not seek and transmit its purpose if it were not for other particles that, along the way, co-create or collaborate with the development and expression of this Universe. To all of them I am infinitely grateful.',
            communityA: 'Protons',
            communityB: 'Neutrons',
            communityC: 'Electrons',
            back: 'Back',
            aMessage: 'Close your eyes and intend your particular message for today. - Currently only in Spanish -',
            aMessageButton: 'Discover your card',
            afirmation: 'Afirmation',
            invitation: 'Invitation',
          }
    }
  }
  
  // Initialize Lang
  const i18n = VueI18n.createI18n({
    locale: localStorage.getItem("lang") != null ? localStorage.getItem("lang") : 'es', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
  });

  // Initialize Vue
  Vue.createApp(VueApp).use(i18n).mount('#app');
  