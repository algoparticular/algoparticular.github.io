<template>
    <div id="cardDeck">
        <template v-for="cardItem in deckData">
            <DeckItem :card="cardItem" />
        </template>        
    </div>
</template>

<script>
    import { onMounted, ref } from 'vue';    
    import { cards } from "../json/cards.json";
    import DeckItem from "./DeckItem.vue";

    function shuffleArray(array) {
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
                resolve(shuffleArray(cards.es))
            }, 3000)
        })
    }
    export default {
        async setup() {
            const deckData = ref(await loadDeckData());
            return {
                deckData,
            };
        },
        mounted() {
            console.log("deck");
        },

        components: { DeckItem }
    }
</script>

<style scoped>
    #cardDeck {
        display: flex;
        flex-wrap: wrap;
        width: 80vw;
        margin: 0 auto;
        gap: 8px;
    }
</style>