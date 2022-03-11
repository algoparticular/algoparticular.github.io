// Configure Vue here
const VueApp = {
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
            }
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
  
  // Initialize Vue
  Vue.createApp(VueApp).mount('#app');