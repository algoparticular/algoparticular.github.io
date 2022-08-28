<script setup>
	import { onMounted, ref } from 'vue';
    import { es } from "../json/copy_es.json";

    const props = defineProps({
        cardId: String
    });    

    const loadCardData = async () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 4000)
        })
    }
    
    const data = ref(await loadCardData());

    // onMounted (() => {
    //      console.log(props.cardId);       
    // });
</script>

<template>
	<main class="cardWrapper" :style="{backgroundColor: es.cards[props.cardId].color}" :class="{fixedHeight: es.cards[props.cardId].invitation === ' '}">
        <div class="imgWrapper" :style="{ backgroundImage: 'url(/cards/' + props.cardId + '.jpg)' }"></div>
        
        <div class="textWrapper">
            <h4 :style="{color: es.cards[props.cardId].colorAlt}">
                {{ $t("cards["+props.cardId+"].name") }}
            </h4>
            <p class="" :style="{color: es.cards[props.cardId].colorAlt}">
                {{ $t("cards["+props.cardId+"].description") }}
            </p>
            <div class="bottom">
                <div>
                    <h5 v-if="es.cards[props.cardId].invitation != ' '" :style="{color: es.cards[props.cardId].colorAlt}">
                        {{ $t("oracle.cardAfirmattion") }}
                    </h5>
                    <p :style="{color: es.cards[props.cardId].colorAlt}">
                        {{ $t("cards["+props.cardId+"].afirmation") }}
                    </p>
                </div>
                <div v-if="es.cards[props.cardId].invitation != ' '">
                    <h5 :style="{color: es.cards[props.cardId].colorAlt}">
                        {{ $t("oracle.cardInvitation") }}
                    </h5>
                    <p :style="{color: es.cards[props.cardId].colorAlt}">
                        {{ $t("cards["+props.cardId+"].invitation") }}
                    </p>
                </div>
            </div>
        </div>        
    </main>
</template>

<style>
    .cardWrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .cardWrapper.fixedHeight {
        height: 100vh;
        justify-content: flex-start;
    }

    .imgWrapper {
        width: 100%;
        height: 0;
        padding-top: 100%;
        overflow: hidden;

        background-size: cover;
        box-shadow: inset 0px 6px 9px rgba(16, 16, 15, 0.36), inset 0px -6px 9px rgba(16, 16, 15, 0.36);              
    }

    .textWrapper {
        padding: 32px 40px 100px;
    }

    .textWrapper h4 {
        letter-spacing: .03em;
    }

    .textWrapper p {
        padding: 0;
        text-align: justify;
        white-space: pre-line;
    }

    .bottom {
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding-top: 24px;
    }

    .bottom h5 {
        text-align: center;
    }

    .bottom p {
        text-align: center;
    }

    /* DESKTOP */
    @media screen and (min-width: 768px) {

        .cardWrapper {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;            
            width: 100vw;
            height: 100vh;
        }

        .imgWrapper {
            width: 50%;
            height: 100%;
            padding-top: 0;
            border-radius: 0;
            background-size: cover;
            background-position: 50%;
        }

        .textWrapper {
            width: 40%;
            padding: 0 5%;
        }
    }
</style>