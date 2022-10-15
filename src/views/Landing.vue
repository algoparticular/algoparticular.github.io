<script setup>
	import { onMounted, ref } from 'vue';
    import { useRouter } from 'vue-router';

    import Header  from '../components/Header.vue';
    
    const router = useRouter();
</script>

<template>
	<div class="content landing">
        <Header>
            
        </Header>

        <section id="hero">
            <div class="column">
                <h2>{{ $t("message.landingIntro") }}</h2>

                <div class="splash particle"></div>
                <div class="splash cell one"></div>
                <div class="splash cell two"></div>
                <div class="splash cell three"></div>
                <div class="splash background"></div>
            </div>
        </section>  

	</div>
</template>

<style>
	#hero {
        background-color: #6A428D;
        height: 90vh;
        padding: 5vh 0;
    }

    h2 {
        color: #F7F8F1;
        position: absolute;
        z-index: 10;
        top: 50vh;
        left: 42vw; 
        
        width: 36vw;
        text-align: center;
        line-height: 130%;;
    }

    .splash {        
        position: absolute;
        z-index: 3;
        
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;        
    }

    .particle {
        background-image: url('../assets/hero/particle.png');
        background-repeat: no-repeat;        
        height: 70vh;
        width: 36vw;

        top: 20vh;
        left: 11vw;
        z-index: 9;
    }

    .cell.one {
            background-image: url('../assets/hero/cell-one.png');
            height: 30vh;
            width: 13vw;

            bottom: 27vh;
            right: 9vw;            
    }

    .cell.two {
            background-image: url('../assets/hero/cell-two.png');
            height: 22vh;
            width: 12vw;

            top: 13vh;
            right: 27vw;
    }
    .cell.three {
            background-image: url('../assets/hero/cell-three.png');            
            height: 18vh;
            width: 15vw;

            bottom: 25vh;
            left: 3vw;
    }    

    .background {
        background-image: url('../assets/hero/background.png');
        background-size: cover;
        
        top: 0;
        z-index: 0;
        height: 100vh;
        width: 100%;
    }
  

	/* DESKTOP */
    @media screen and (min-width: 769px) {
        
    }
</style>