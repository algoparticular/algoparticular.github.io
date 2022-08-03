<script setup>
	import { onMounted, ref } from 'vue';    

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

    onMounted (() => {
        // console.log(props.cardId);       
    });
</script>

<template>
	<main class="cardWrapper">
        <div class="imgWrapper" :style="{ backgroundImage: 'url(/src/assets/cards/' + props.cardId + '.jpg)' }"></div>
        
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

<style>
    .imgWrapper {
        width: 100%;
        height: 0;
        padding-top: 100%;
        overflow: hidden;

        background-size: cover;
        box-shadow: inset 0px 6px 9px rgba(16, 16, 15, 0.36), inset 0px -6px 9px rgba(16, 16, 15, 0.36);              
    }

    .textWrapper {
        padding: 16px 24px;
    }

    .textWrapper h4 {
        
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
        .imgWrapper {
            width: 40%;
            padding-top: 40%;
            border-radius: 60px;
        }

        .textWrapper {
            width: 40%;
        }
    }
</style>