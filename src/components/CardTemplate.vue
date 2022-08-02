<script setup>
	import { onMounted, ref } from 'vue';    

    const props = defineProps({
        cardData: Object
    });
    
    // console.log(props.cardData);

    const loadCardData = async () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 4000)
        })
    }

    // console.log(props.cardData);
    
    const data = ref(await loadCardData());
</script>

<template>
	<main class="cardWrapper">
        <div class="imgWrapper" :style="{ backgroundImage: 'url(/src/assets/cards/' + props.cardData.id + '.jpg)' }"></div>
        
        <div class="textWrapper">
            <h4>
                {{ props.cardData.name }}
            </h4>
            <p class="">
                {{ props.cardData.description }}
            </p>
            <div class="bottom">
                <div>
                    <h5>Afirmación</h5>
                    <p>{{ props.cardData.afirmation }}</p>
                </div>
                <div>
                    <h5>Invitación</h5>
                    <p>{{ props.cardData.invitation }}</p>
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