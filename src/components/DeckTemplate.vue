<script>
    import { onMounted, ref } from 'vue';    
    import DeckItem from "./DeckItem.vue";   

    function shuffleNumbers() {
        let array=[];

        //create array with shuffled amount of cards -> 60
        for (let i = 0; i < 60; ++i) array[i]= "" + i;

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

    export default {
        async setup() {
            const deckData = ref(await loadDeckData());
            return {
                deckData,
            };
        },
        data() {
            return {
                
            }
        },
        methods: {
            
        },
        mounted() {            
        },
        components: { DeckItem }
    }
</script>

<template>
    <p>{{ $t("message.praxisDeck") }}</p>
    <div class="deckWrapper">
        <template v-for="cardItem in deckData" :key="cardItem">
            <DeckItem :cardId="cardItem" :loading="false" />
        </template>
    </div>
</template>

<style scoped>
    .deckWrapper {
        display: flex;
        flex-wrap: wrap;
        width: calc(94px * 3 + 8px * 2);
        margin: 0 auto;
        gap: 8px;
    }

    /* DESKTOP */
    @media screen and (min-width: 900px) and (max-width: 1280px) {
        .deckWrapper {
            width: calc(94px * 9 + 8px * 8);
        }
    }

    /* XL */
    @media screen and (min-width: 1281px) {
        .deckWrapper {
            width: calc(94px * 11 + 8px * 10);
        }
    }
</style>