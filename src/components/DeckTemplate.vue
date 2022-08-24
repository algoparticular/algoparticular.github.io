<script setup>
    import { onMounted, ref } from 'vue'; 
    import DeckItem from "./DeckItem.vue";     

    const props = defineProps({
        amountOfCards: Number
    });    

    function shuffleNumbers() {
        let array=[];

        //create array with shuffled amount of cards -> 60
        for (let i = 0; i < props.amountOfCards; ++i) array[i]= "" + i;

        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    const loadDeckData = async () => {
        return new Promise((resolve) => {
            setTimeout(() => {                
                resolve(shuffleNumbers())
            }, 2500)
        })
    }

    const deckData = ref(await loadDeckData());
</script>

<template>
    <p class="deckIntro">{{ $t("oracle.deckCopy") }}</p>
    <div class="deckWrapper">
        <template v-for="cardItem in deckData" :key="cardItem">
            <DeckItem :cardId="cardItem" :loading="false" />
        </template>
    </div>
</template>

<style>
    .deckWrapper {
        display: flex;
        flex-wrap: wrap;
        width: calc(94px * 3 + 10px * 2);
        margin: 0 auto;
        gap: 8px;
    }

    p.deckIntro {
        font-family: 'particular', 'Inter', helvetica, sans-serif;
        font-size: 24px;
        color: #F7F8F1;
        text-align: center;
        letter-spacing: 2px;
        width: 360px;
        min-height: 108px;
    }

    /* DESKTOP */
    @media screen and (min-width: 900px) and (max-width: 1280px) {
        .deckWrapper {
            width: calc(94px * 9 + 10px * 8);
        }
    }

    /* XL */
    @media screen and (min-width: 1281px) {
        .deckWrapper {
            width: calc(94px * 11 + 10px * 10);
        }
    }

</style>