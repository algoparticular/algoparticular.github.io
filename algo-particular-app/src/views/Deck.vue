<script setup>
    import DeckTemplate from '../components/DeckTemplate.vue';
    import DeckTemplateSkeleton from '../components/DeckTemplateSkeleton.vue';
</script>

<template>
    <Suspense>
    <template #default>
        <DeckTemplate />
    </template>
    <template #fallback> 
        <DeckTemplateSkeleton />
    </template>
  </Suspense>
</template>
