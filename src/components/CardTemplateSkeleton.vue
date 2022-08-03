<script setup>
    const props = defineProps({
        cardId: String
    });
</script>

<script>
// import { Motion } from "motion/vue";
import { animate } from "motion";

export default {
//   components: { Motion },

  data() {
    return {
      randomIndex: 0
    }
  },

  methods: {
    randomizePhrase() {
        this.randomIndex = Math.floor(Math.random() * 7) ; //+ 1
    },
    animateLaberintou() {
        const paths = document.querySelectorAll("#cardLoader path");

        animate(paths, 
            {strokeDasharray: 1000},
            {   duration: 3.6, 
                easing: 'ease-in'
            });
    },   
  },
  mounted() {    
        this.randomizePhrase();
        this.animateLaberintou();
  }
}
</script>

<template>
    <div class="overlay">
        <svg id="cardLoader" width="283" height="264" viewBox="0 0 283 264" xmlns="http://www.w3.org/2000/svg">            
            <path d="M160.8 218.6C160.8 218.6 237.9 226.6 237.9 141.5C237.9 88.2 194.7 45.1 141.5 45.1C88.3 45.1 45.1 88.3 45.1 141.5C45.1 162.8 62.4 180.1 83.7 180.1H160.8C182.1 180.1 199.4 162.8 199.4 141.5C199.4 109.5 173.5 83.6 141.5 83.6C109.5 83.6 83.6 109.5 83.6 141.5"/>
            <path d="M83.6 218.6C41 218.6 6.5 184.1 6.5 141.5C6.5 66.9 66.9 6.5 141.5 6.5C216.1 6.5 276.5 66.9 276.5 141.5C276.5 263.1 160.8 257.4 160.8 257.4C139.5 257.4 122.2 240.1 122.2 218.8V218.6V141.5C122.2 130.8 130.9 122.2 141.5 122.2C152.2 122.2 160.8 130.8 160.8 141.5"/>
        </svg>
        <p>{{ $t("loading["+randomIndex+"]") }}</p>
    </div>
	<main class="cardWrapper">
        <div class="imgWrapper"></div>
        
        <div class="textWrapper">
            <h4>
                {{ $t("cards["+props.cardId+"].name") }}
            </h4>
            <p class="">
                {{ $t("cards["+props.cardId+"].description") }}
            </p>
            <div class="bottom">
                <div>
                    <h5>{{ $t("message.cardAfirmation") }}</h5>
                    <p>{{ $t("cards["+props.cardId+"].afirmation") }}</p>
                </div>
                <div>
                    <h5>{{ $t("message.cardInvitation") }}</h5>
                    <p>{{ $t("cards["+props.cardId+"].invitation") }}</p>
                </div>
            </div>
        </div>        
    </main>
</template>

<style scoped>
    .overlay {
        width: 100vw;
        height: 100vh;
        position: absolute;
        background: rgba(247, 248, 241, 0.18);
        backdrop-filter: blur(6px);
        -webkit-backdrop-filter: blur(6px);

        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        align-items: center;
        gap: 32px;

        padding-top: 9vh;
    }

    #cardLoader {
        width: 140px;
        height: auto;
    }

    #cardLoader path {
        fill: transparent;
        stroke: #F7F8F1;
        stroke-width: 13px;
        stroke-dasharray: 0;
        /* stroke-dashoffset: 0; */
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-miterlimit: 10;
    }

    .overlay p {
        font-size: 21px;
        color: #F7F8F1;
        margin-bottom: 0;
    }

    /* CARD */
    .imgWrapper {
        background: #10100F;
    }

    /* DESKTOP */
    @media screen and (min-width: 768px) {
        .overlay {
            padding: 0;
            justify-content: center;
        }

        #cardLoader path {
            stroke: #10100F;
        }

        .overlay p {
            color: #10100F;
        }
    }
</style>


<!-- <script setup>
	import { onMounted, ref } from 'vue';
    import { Motion } from "motion/vue";

    const randomPhrase = ref('');
    const loadingPhrases = ref([
        "Talking with the Masters...",
        "Reading particles' stories...",
        "Downloading particles' data...",
        "Connecting with the Source...",
        "Calibrating the frequency...",
        "Harmonizing the vibration...",
        "Breathing in, breathing out...",
    ]);

    function randomizePhrase() {
        let randomIndex = Math.floor(Math.random() * loadingPhrases.value.length) ; //+ 1
        randomPhrase.value = loadingPhrases.value[randomIndex];
    }

    onMounted (() => {
        randomizePhrase();
    });   

    const draw = (progress) => ({
        // This property makes the line "draw" in when animated
        strokeDashoffset: 1 - progress,
        
        // Each line will be hidden until it starts drawing
        // to fix a bug in Safari where the line can be
        // partially visible even when progress is at 0
        visibility: "visible",
    });         
</script> -->
<!-- <Motion
    tag="path"
    d="M160.8 218.6C160.8 218.6 237.9 226.6 237.9 141.5C237.9 88.2 194.7 45.1 141.5 45.1C88.3 45.1 45.1 88.3 45.1 141.5C45.1 162.8 62.4 180.1 83.7 180.1H160.8C182.1 180.1 199.4 162.8 199.4 141.5C199.4 109.5 173.5 83.6 141.5 83.6C109.5 83.6 83.6 109.5 83.6 141.5"
    pathLength="1"
    :initial="{opacity: 0}"
    :animate="{opacity: 1}"
    :transition="{ duration: 1.8, ease: 'ease-out' }"
/>
<Motion
    tag="path"
    d="M83.6 218.6C41 218.6 6.5 184.1 6.5 141.5C6.5 66.9 66.9 6.5 141.5 6.5C216.1 6.5 276.5 66.9 276.5 141.5C276.5 263.1 160.8 257.4 160.8 257.4C139.5 257.4 122.2 240.1 122.2 218.8V218.6V141.5C122.2 130.8 130.9 122.2 141.5 122.2C152.2 122.2 160.8 130.8 160.8 141.5"
    pathLength="1"
    :animate="draw(1)"
    :transition="{ duration: 1.2, delay: 0.6, ease: 'ease-out' }"
/> -->