<script setup>
    import { onMounted, ref } from 'vue';    
    import DeckItem from "./DeckItem.vue";

</script>

<template>
    <p>Mezclando cartas...</p>
    <div class="deckWrapper">
        <template v-for="item in 60">
            <DeckItem :loading="true"  />
        </template>
    </div>
</template>

<style>
    .deckWrapper {
        display: flex;
        flex-wrap: wrap;
        width: calc(94px * 3 + 8px * 2);
        margin: 0 auto;
        gap: 8px;
    }

    /* DESKTOP */
    @media screen and (min-width: 900px) {
        .deckWrapper {
            width: calc(94px * 9 + 8px * 8);
        }
    }
</style>