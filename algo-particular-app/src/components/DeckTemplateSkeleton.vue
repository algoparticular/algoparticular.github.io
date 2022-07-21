<script setup>
    import { onMounted, ref } from 'vue';    
    import DeckItem from "./DeckItem.vue";

</script>

<template>
     <main id="cardDeck">
        <p>Escoje una carta</p>
        <div class="deckWrapper">
            <template v-for="item in 18">
                <DeckItem :loading="true"  />
            </template>
        </div>                
    </main>
</template>

<style>
    .deckWrapper {
        display: flex;
        flex-wrap: wrap;
        width: calc(94px * 3 + 8px * 2);
        margin: 0 auto;
        gap: 8px;
    }
</style>