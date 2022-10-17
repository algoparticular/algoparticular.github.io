<script setup>
	import { onMounted, ref } from 'vue';
    import { useRouter } from 'vue-router';
    import { animate, scroll } from "motion";

    import Header  from '../components/Header.vue';
    import Footer  from '../components/Footer.vue';
    
    const router = useRouter();

    const items = document.querySelectorAll("li");   

    //ON MOUNTED
	onMounted (() => {   
        // scroll(
        //     animate("ul", {
        //         transform: ["none", `translateX(-${items.length - 1}00vw)`]
        //     }),
        //     { target: document.querySelector("section") }
        // );
    });
</script>

<template>
	<div class="landing">
        <Header>
            <template v-slot:logo>
                <img alt="Algo Particular" src="../assets/SeedWhite.svg">
            </template>
        </Header>

        <section id="hero">
            <h2>{{ $t("landing.intro") }}</h2>

            <div class="splash particle"></div>
            <div class="splash cell one"></div>
            <div class="splash cell two"></div>
            <div class="splash cell three"></div>
            <div class="splash background"></div>            
        </section>

        <section id="oracle">
            <div class="copy">
                <div class="heading">
                    <img src="../assets/icon/Lab.svg"/>
                    <h3>{{ $t("landing.oracleTitle") }}</h3>
                </div>
                <p>{{ $t("landing.oracleDescrip") }}</p>
                <button>{{ $t("landing.oracleAction") }}</button>
            </div>
        
            <div class="oracle particle"></div>
            <div class="oracle tree"></div>
            <div class="oracle background"></div>            
        </section>

        <section id="about">
            <ul class="imageWrapper">
                <li :style="{backgroundImage: 'url(/gallery/27.jpg)'}"></li>
                <li :style="{backgroundImage: 'url(gallery/3.jpg)'}"></li>
                <li :style="{backgroundImage: 'url(gallery/29.jpg)'}"></li>
                <li :style="{backgroundImage: 'url(gallery/4.jpg)'}"></li>
                <li :style="{backgroundImage: 'url(gallery/20.jpg)'}"></li>
            </ul>

            <div class="copy">
                <div class="heading">
                    <img src="../assets/icon/Brote.svg"/>
                    <h3>{{ $t("landing.aboutTitle") }}</h3>
                </div>
                <p>{{ $t("landing.aboutDescrip") }}</p>
                <button>{{ $t("landing.aboutAction") }}</button>
            </div>
        </section>

        <section id="uno">
            <h3>{{ $t("landing.uno") }}</h3>
        </section>

        <Footer />
	</div>
</template>

<style>
    section {
        height: 100vh;
        width: 100vw;
        position: relative;
    }

    /* HERO */
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
        font-size: 40px;
        letter-spacing: 3px;
        line-height: 130%;
    }

    .splash, .oracle {        
        position: absolute;
        z-index: 3;
        
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;        
    }

    .splash.particle {
        background-image: url('../assets/hero/particle.png');
        height: 70vh;
        width: 36vw;

        top: 20vh;
        left: 11vw;
        z-index: 9;
    }

    .splash.cell.one {
        background-image: url('../assets/hero/cell-one.png');
        height: 30vh;
        width: 13vw;

        top: 63vh;
        right: 9vw;            
    }

    .splash.cell.two {
        background-image: url('../assets/hero/cell-two.png');
        height: 22vh;
        width: 12vw;

        top: 13vh;
        right: 20vw;
    }
    .splash.cell.three {
        background-image: url('../assets/hero/cell-three.png');            
        height: 18vh;
        width: 15vw;

        top: 73vh;
        left: 3vw;
    }    

    .splash.background {
        background-image: url('../assets/hero/background.png');
        background-size: cover;
        
        top: 0;
        z-index: 0;
        width: 100vw;
        height: 100%;
    }
  
    /* ORACLE */
    #oracle {
        background-color: #0381BA;   
        display: flex;
        align-items: center;
        justify-content: center;
        width: 70vw;
        padding: 0 15vw;
    }

    .copy {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 40px;        
    }

    .copy .heading {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 16px;
    }

    .copy .heading img {
        width: 48px;
        height: 48px;
        filter: drop-shadow(0px 2px 3px #C7BE8E);        
    }

    .copy .heading h3 {
        color: #F7F8F1;
        font-size: 32px;
        text-align: center;
    }

    .copy p {
        color: #F7F8F1;
        font-size: 18px;
        line-height: 150%;
        text-align: center;
        max-width: 310px;
    }

    .copy button {
        color: #0381BA;
        min-width: 310px;
    }

    .copy button:hover {
        /* color: #F7F8F1; */
        background-color: #E8E974;
    }

    .oracle.particle {
        background-image: url('../assets/hero/particle.png');                
        height: 70vh;
        width: 36vw;

        top: 20vh;
        right: 11vw;
        z-index: 9;
    }

    .oracle.tree {
        
    }

    .oracle.background {
        
    }

    /* ABOUT */
    #about {
        background-color: #F7F8F1;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    #about .imageWrapper {
        display: flex;
        position: sticky;
        top: 0;
        z-index: 0; 
        list-style: none;

        margin: 0;
        padding: 0;
        /* overflow: scroll; */
        width: 100vw;
        height: 100vh;
        background-color: #A4DAD9;        
    }

    #about .imageWrapper li {
        display: flex;
        width: 100%;
        height: 100%;
        flex: 0 0 auto;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        overflow: hidden;

        margin: 0;
        padding: 0;

        background-size: cover;
        background-position: center;
        box-shadow: inset 0px -6px 81px rgba(255, 111, 97, 0.36), inset 0px 6px 81px rgba(20, 50, 70, 0.23);     
    }

    #about .copy {        
        width: 100vw;
        height: 100%;
        background-color: #F7F8F1;
        z-index: 1;
    }

    #about .copy .heading img {
        filter: drop-shadow(0px 2px 3px rgba(255, 111, 97, 0.56));
    }

    #about .copy .heading h3 {
        color: #143246;
    }

    #about .copy p {
        color: #143246;
    }

    #about .copy button {
        color: #F7F8F1;
        background-color: #FF6F61;
    }

    #about .copy button:hover {
        color: #143246;
        background-color: #E8E974;
    }

    /* UNO */
    #uno {
        background-color: #FF6F61;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80vh;
    }

    #uno h3 {
        color: #F7F8F1;
    }

	/* DESKTOP */
    @media screen and (min-width: 769px) {
        #oracle,
        #about {
            flex-direction: row;
        }

        #oracle {
            justify-content: flex-start;
        }

        #about .imageWrapper {
            width: 50vw;            
        }

        #about .copy {
            width: 50vw;
        }

        #uno {
            height: 42vh;
        }
    }
</style>