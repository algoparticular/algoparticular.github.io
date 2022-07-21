<script setup>
	import { onMounted, ref } from 'vue';  

    onMounted (() => {
        anime({
            targets: '#cardLoader path',
            strokeDashoffset: [0, anime.setDashoffset],
            easing: 'easeInQuint',
            duration: 2700,
            delay: 500,
            complete: function(){}
        }); 
    });        
</script>

<template>
    <div class="overlay">
        <svg id="cardLoader" width="283" height="264" viewBox="0 0 283 264" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M160.8 218.6C160.8 218.6 237.9 226.6 237.9 141.5C237.9 88.2 194.7 45.1 141.5 45.1C88.3 45.1 45.1 88.3 45.1 141.5C45.1 162.8 62.4 180.1 83.7 180.1H160.8C182.1 180.1 199.4 162.8 199.4 141.5C199.4 109.5 173.5 83.6 141.5 83.6C109.5 83.6 83.6 109.5 83.6 141.5" stroke="#10100F" stroke-width="13" stroke-miterlimit="10" stroke-linecap="round" style="stroke-dashoffset: 0px;"/>
            <path d="M83.6 218.6C41 218.6 6.5 184.1 6.5 141.5C6.5 66.9 66.9 6.5 141.5 6.5C216.1 6.5 276.5 66.9 276.5 141.5C276.5 263.1 160.8 257.4 160.8 257.4C139.5 257.4 122.2 240.1 122.2 218.8V218.6V141.5C122.2 130.8 130.9 122.2 141.5 122.2C152.2 122.2 160.8 130.8 160.8 141.5" stroke="#10100F" stroke-width="13" stroke-miterlimit="10" stroke-linecap="round" style="stroke-dashoffset: 0px;"/>
        </svg>
    </div>
	<main class="cardWrapper">
        <div class="imgWrapper"></div>
        
        <div class="textWrapper">
            <h4>
                Skeleton
            </h4>
            <p class="">
                Esta es una carta skeleton, guardala para la buena vibra huesitica. Estoy escribiendo para rellenar con texto y que de fondo parezca que se está cargando la carta.
                Esta es una carta skeleton, guardala para la buena vibra huesitica. Estoy escribiendo para rellenar con texto y que de fondo parezca que se está cargando la carta.
                Esta es una carta skeleton, guardala para la buena vibra huesitica.
            </p>
            <div class="bottom">
                <div>
                    <h5>Afirmación</h5>
                    <p>Yo soy un texto re placeholder</p>
                </div>
                <div>
                    <h5>Invitación</h5>
                    <p>Yo soy un texto re placeholder</p>
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
    }

    #cardLoader {
        width: 140px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
    }

    /* CARD */
    .cardWrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        
    }

    .imgWrapper {
        z-index: -1;
        width: 100%;
        height: 0;
        padding-top: 100%;
        overflow: hidden;
        position: relative;

        background: #F7F8F1;
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
</style>