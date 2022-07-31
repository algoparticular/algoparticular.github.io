<script setup>
    import DeckTemplate from '../components/DeckTemplate.vue';
    import DeckTemplateSkeleton from '../components/DeckTemplateSkeleton.vue';
</script>

<template>
    <div class="content deck">
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
    </div>
</template>

<style scoped>
    .content.deck {
        padding-top: 9vh;
    }

    /* DESKTOP */
    @media screen and (min-width: 768px) {
        .content.deck {
            padding: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
</style>