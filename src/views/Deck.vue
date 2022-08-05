<script setup>
    import DeckTemplate from '../components/DeckTemplate.vue';
    import DeckTemplateSkeleton from '../components/DeckTemplateSkeleton.vue';

    import { onMounted, ref } from 'vue';
    import { useRouter } from 'vue-router';
    
    const router = useRouter();
    const cardsAmount = ref(33);

    const navigate = (url) => {
        router.push({ path: url, replace: true });
    };
</script>

<template>
    <div class="content deck">        
        <main id="cardDeck">        
            <Suspense>
                <template #default>
                    <DeckTemplate :amountOfCards="cardsAmount"/>
                </template>
                <template #fallback> 
                    <DeckTemplateSkeleton :amountOfCards="cardsAmount"/>
                </template>
            </Suspense>
        </main>
        <button class="back" @click="navigate('/')"></button>
    </div>
</template>

<style>
    .content.deck {
        padding-top: 9vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: auto;      
    }

    .deck button.back {   
        margin: 48px 0;     
        height: 40px;
        background-repeat: no-repeat;
        background-color: transparent;
        background-image: url('../assets/icon/Back.svg');
        filter: drop-shadow(0px 2px 3px rgb(199, 190, 142));
    }

    /* DESKTOP */
    @media screen and (min-width: 768px) {
        .content.deck {
            padding: 40px 0;
        }
    }
    
</style>