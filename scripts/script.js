import Particle from './Particle.js';

// Configure Vue here
const VueApp = {
    components: {
        Particle
    },

    // Put variables here
    data() {
        return {            
            showModal: false,
            modal: {
                src: '',
                caption: ''
            },
            gallery: [
                {
                    title: "Nekkhamma",
                    src: "/assets/gallery/1 Nekkhamma.jpg",
                    description: "",
                },
                {
                    title: "Sila",
                    src: "/assets/gallery/2 Sila.jpg",
                    description: "",
                },
                {
                    title: "Dana",
                    src: "/assets/gallery/3 Dana.jpg",
                    description: "",
                },
                {
                    title: "Pañña",
                    src: "/assets/gallery/4 Pañña.jpg",
                    description: "",
                },
                {
                    title: "Viriya",
                    src: "/assets/gallery/5 Viriya.jpg",
                    description: "",
                },
                {
                    title: "Kshanti",
                    src: "/assets/gallery/6 Kshanti.jpg",
                    description: "",
                },
                {
                    title: "Sacca",
                    src: "/assets/gallery/7 Sacca.jpg",
                    description: "",
                },
                {
                    title: "Addhitthana",
                    src: "/assets/gallery/8 Addhitthana.jpg",
                    description: "",
                },
                {
                    title: "Metta",
                    src: "/assets/gallery/9 Metta.jpg",
                    description: "",
                },
                {
                    title: "Upekka",
                    src: "/assets/gallery/10 Upekka.jpg",
                    description: "",
                },
            ],
            shops: {
                current_fc: 'assets/shop/fc_0.jpg',
                current_tl: 'assets/shop/tl_0.jpg',
                flashcookie: 4,
                threadless: 5
            },
            particles: {
                proton: [
                    {
                        name: 'Victoria Revol',
                        url: 'https://victoriarevol.com',
                        image: '/assets/community/particle.svg'
                    },
                ],
                neutron: [
                    {
                        name: 'Belén Brito',
                        url: 'https://www.instagram.com/britobelenmaria',
                        image: '/assets/community/particle.svg'
                    },
                    {
                        name: 'Pepi Prieto',
                        url: 'https://samasama.studio',
                        image: '/assets/community/particle.svg'
                    },
                ],
                electron: [
                    {
                        name: 'María Laura Yañez',
                        url: 'https://www.instagram.com/mlauray',
                        image: '/assets/community/particle.svg',
                        type: 'electron'
                    },
                    {
                        name: 'Matías Tozzola',
                        url: 'https://www.instagram.com/mtozzola',
                        image: '/assets/community/particle.svg',
                        type: 'electron'
                    },
                ],
            },
            randomNumber: '',
        }
    },    
  
    // Functions go here
    methods: {
        openModal(i) {
            this.modal.src = this.gallery[i].src;
            this.modal.caption = this.gallery[i].title;

            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;

            this.modal.src = '';
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
        getMessage() {		
            this.randomNumber = Math.random() * this.gallery.length;
            this.randomNumber = this.randomNumber.toFixed();
        }
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
    }
  };

  const messages = {
    es: {
        message: {
            hello: 'Algo Particular cuenta las historias de una partícula que al volverse consciente de sí, aprende a navegar el Universo libremente.<br>Bajo la premisa hermética "Como es arriba, es abajo", transmite su verdad: todos somos iguales, todos somos uno, (no) somos (de) aquí.',
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
            aMessage: 'Empieza el día con un mensaje de los guías',
          }
    },
    en: {
        message: {
            hello: 'Algo Particular tells the stories of a particle that upon becoming self-aware, learns to navigate the Universe freely.<br>Under the Hermetic premise "As above, so below", it conveys its truth: we are all the same, we are all one, we are (not from) here.',
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
            aMessage: 'Start the day with a message from the guides',
          }
    }
  }
  
  // Initialize Lang
  const i18n = VueI18n.createI18n({
    locale: 'es', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
  });

  // Initialize Vue
  Vue.createApp(VueApp).use(i18n).mount('#app');
  