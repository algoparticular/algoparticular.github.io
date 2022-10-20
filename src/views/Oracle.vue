<script setup>
    import Header from '../components/Header.vue';
    import DeckTemplate from '../components/DeckTemplate.vue';
    import DeckTemplateSkeleton from '../components/DeckTemplateSkeleton.vue';

    import { onBeforeMount, ref } from 'vue';
    import { useRouter } from 'vue-router';

    const router = useRouter();
    const cardsAmount = ref(33);

</script>

<template>
    <Header 
        :hasBack="true"
        :hasMenu="true"/>
    <div class="content deck">         
        <Suspense>
            <template #default>
                <DeckTemplate :amountOfCards="cardsAmount"/>
            </template>
            <template #fallback> 
                <DeckTemplateSkeleton :amountOfCards="cardsAmount"/>
            </template>
        </Suspense>
    </div>
</template>

<style>
    .content.deck {
        padding: 13vh 0 108px; 
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: auto;            
    }


    /* DESKTOP */
    @media screen and (min-width: 769px) {
        .content.deck {
            padding: 40px 0;
        }
    }
    
</style>