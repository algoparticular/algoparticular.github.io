<script setup>
    import DeckTemplate from '../components/DeckTemplate.vue';
    import DeckTemplateSkeleton from '../components/DeckTemplateSkeleton.vue';
    import Toolbar from '../components/Toolbar.vue';
</script>

<template>
    <main id="cardDeck">        
        <Suspense>
            <template #default>
                <DeckTemplate />
            </template>
            <template #fallback> 
                <DeckTemplateSkeleton />
            </template>
        </Suspense>
    </main>
    <Toolbar />
</template>

<style scoped>
    main {
        margin-top: 100px;
    }
</style>