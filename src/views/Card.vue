<script setup>
    import Toolbar from '../components/Toolbar.vue';	
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
        <Toolbar :hideAction="true"/>
    </div>
</template>

<style>
    
</style>