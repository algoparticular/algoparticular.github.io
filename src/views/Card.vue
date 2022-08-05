<script setup>
    import CardTemplate from '../components/CardTemplate.vue';
    import CardTemplateSkeleton from '../components/CardTemplateSkeleton.vue';
    
    import { onBeforeMount, onMounted, ref } from 'vue';

    const props = defineProps({
        id: String
    });

    let cardId = "10";

    if (props.id != null) {
        cardId = props.id;
    }

    onBeforeMount (() => {
        
    });

    onMounted (() => {
        // console.log(cardId);
    });
</script>

<template>
    <div class="content">
        <Suspense>
            <template #default>
                <CardTemplate :cardId="cardId"/>
            </template>
            <template #fallback> 
                <CardTemplateSkeleton :cardId="cardId"/>
            </template>
        </Suspense>
    </div>
</template>

<style>
    
</style>