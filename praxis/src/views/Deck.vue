<script setup>
    import DeckTemplate from '../components/DeckTemplate.vue';
    import DeckTemplateSkeleton from '../components/DeckTemplateSkeleton.vue';
</script>

<template>
    <div class="content">
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
    
</style>