<script setup>
    import Toolbar from '../components/Toolbar.vue';	
    import { useRouter } from 'vue-router';
    
    const router = useRouter();

    const navigate = (url) => {
        router.push({ path: url, replace: true });
    };

    function goBack() {
        console.log(router);

        // router.back();
    }
</script>


<template>
    <div class="content">
        <!-- <button class="back" @click="goBack()"></button> -->
		<main id="about">

			<section class="intro">
				<p>{{ $t("about.intro") }}</p>
                <img src="../assets/Logo_mana.svg">
			</section>  
            <section class="credits">
                <!-- <div>
                    <p>{{ $t("about.oracleDeck") }}</p>
                    <p class="by">{{ $t("about.oracleAuthor") }}</p>
                </div> -->
                <div>
                    <p>{{ $t("about.designedBy") }}</p>
                    <p class="by">{{ $t("about.author") }}</p>
                </div>
            </section>          
            <section class="faq">
                <h4 class="title">{{ $t("about.praxis") }}</h4>
                <p>{{ $t("about.praxisDescrip") }}</p>
            </section>
            <section class="faq">
                <h4 class="title">{{ $t("about.oracle") }}</h4>
                <p>{{ $t("about.oracleDescrip") }}</p>
                <div>
                    <button class="main seed"></button>
                    <p>{{ $t("about.seed") }}</p>
                </div>
                <div>
                    <button class="main brote"></button>
                    <p>{{ $t("about.brote") }}</p>
                </div>
            </section>            
            <section class="cta">
                <button @click="navigate('/collaborate')">{{ $t("about.cta") }}</button>
            </section>
            <section class="promo">
                <div class="wrapper">
                    <p>{{ $t("about.seeMore") }}</p>
                    <p>{{ $t("about.seeMoreAction") }}</p>
                    <a href="https://algoparticular.com" target="_blank"></a>
                </div>
                <div class="border"></div>
            </section>
		</main> 
        <Toolbar />
	</div>
</template>


<style scoped>
    main {
        gap: 108px;
        padding-bottom: 108px;
    }

    .content button.back {   
        margin: 40px;     
        height: 40px;        
    }

    .intro p, .credits p {
        text-align: center;
    }

    .intro img {
        width: 283px;
        margin: 0 40px;
    }

    .credits {
        display: flex;
        flex-direction: column;
        gap: 56px;
    }

    .credits div {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .credits p {
        margin-bottom: 0;
    }

    .credits p.by {
        font-weight: 600;
    }

    .faq {
        padding: 40px;
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .faq .title {
        text-align: center;
    }

    .faq p {
        text-align: justify;
        white-space: pre-line;
    }

    .faq div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
    }

    .faq div p {        
        text-align: center;
    }

    .faq button.main {
        border-radius: 100%;

        width: 60px;
        height: 60px;

        box-shadow: 0px 2px 6px rgba(16, 16, 15, 0.36); 
        
        background-image: url('../assets/icon/Seed.svg');
        background-color: #FF6F61;
        background-repeat: no-repeat;
        background-position: 50%;
        background-size: 50%;

    }

    .faq button.main.brote  {
        background-image: url('../assets/icon/Brote.svg');
    }

    /* .cta button {
        background-color: #E9EDD8;
    } */

    .promo {
        margin: 0 40px;    
        position: relative;           
    }
    
    .promo .wrapper {
        padding: 36px;
    }

    .promo .wrapper p {
        text-align: center;
    }

    .promo .wrapper a {
        background-color: #E9EDD8;
        background-image: url(../assets/ilus.png);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: 50%;
        height: 150px;
        display: block;

    }

    .promo .border {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
        border: 2px solid rgba(252, 252, 252, 0.42);
        filter: drop-shadow(0px 2px 3px rgb(234, 234, 234));
        border-radius: 18px; 
    }
</style>