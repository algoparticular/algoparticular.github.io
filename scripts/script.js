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
            gallery: [
                {
                    title: "Nekkhamma",
                    image: "/assets/gallery/1 Nekkhamma.jpg",
                    description: "",
                },
                {
                    title: "Sila",
                    image: "/assets/gallery/2 Sila.jpg",
                    description: "",
                },
                {
                    title: "Dana",
                    image: "/assets/gallery/3 Dana.jpg",
                    description: "",
                },
                {
                    title: "Pañña",
                    image: "/assets/gallery/4 Pañña.jpg",
                    description: "",
                },
                {
                    title: "Viriya",
                    image: "/assets/gallery/5 Viriya.jpg",
                    description: "",
                },
                {
                    title: "Kshanti",
                    image: "/assets/gallery/6 Kshanti.jpg",
                    description: "",
                },
                {
                    title: "Sacca",
                    image: "/assets/gallery/7 Sacca.jpg",
                    description: "",
                },
                {
                    title: "Addhitthana",
                    image: "/assets/gallery/8 Addhitthana.jpg",
                    description: "",
                },
                {
                    title: "Metta",
                    image: "/assets/gallery/9 Metta.jpg",
                    description: "",
                },
                {
                    title: "Upekka",
                    image: "/assets/gallery/10 Upekka.jpg",
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
            loadingCard: false,
            randomNumber: '',
            randomCard: {
                name: '',
                description: '',
                image: '',
                afirmation: '',
                invitation: ''
            },
            cards: [
                {
                    name: 'Aceptación',
                    description: 'La aceptación es la capacidad para asumir la vida y a los otros tal como son, sin intentar cambiar o luchar contra aquello que no podemos controlar. Aceptar que hay realidades que exceden tu control, no es una actitud estática, es una decisión activa, que nos invita a no cargar  ninguna malicia hacia nada o nadie. Al reconocer la diversidad, somos capaces de transformarnos. Al aceptar aquello que te hace único, eso particular que habita en vos, te vuelves más confiado y tu ser divino se revela.',
                    image: '/assets/gallery/8 Addhitthana.jpg',
                    afirmation: 'Acepto quien soy y lo que me rodea.',
                    invitation: 'Dale aceptate como sos!'
                },
                {
                    name: 'Belleza',
                    description: 'Experimentar un profundo placer en un mundo lleno de muchas clases de belleza es una alegría de la vida. Creer que existe una sola clase de belleza equivale a no prestar atenciòn a la naturaleza. Poder ver lo bello aun en la apariencia más desafiante es un alimento para el alma. A medida que sintonizas con la particular belleza de tu ser, de los otros y de la naturaleza, tu resonancia se convierte en la de la belleza, y se irradia hacia todo lo que te rodea, volviéndolo luminoso.',
                    image: '/assets/gallery/9 Metta.jpg',
                    afirmation: 'Iluminó mi belleza y la de los otros.',
                    invitation: 'Me miro al espejo y digo, Soy una bella partícula'
                },
            ],
        }
    },    
  
    // Functions go here
    methods: {
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
            aMessage: 'Descubre tu mensaje Particular de hoy',
            aMessageButton: 'Sacar una carta',
            afirmation: 'Afirmación',
            invitation: 'Invitación',
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
            aMessage: 'Discover your Particular message for today',
            aMessageButton: 'Take a card',
            afirmation: 'Afirmation',
            invitation: 'Invitation',
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
  