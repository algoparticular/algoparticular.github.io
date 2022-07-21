<script setup>
    import CardTemplate from '../components/CardTemplate.vue';
    import CardTemplateSkeleton from '../components/CardTemplateSkeleton.vue';
    
    import { onMounted, ref } from 'vue';

     const props = defineProps({
        name: String,
        description: String,
        image: String,
        afirmation: String,
        invitation: String
    });
    // console.log(props.name);

    const cardData = {
        name: props.name,
        description: props.description,
        image: props.image,
        afirmation: props.afirmation,
        invitation: props.invitation
    };

    onMounted (() => {
        
    });
</script>

<template>
    <Suspense>
    <template #default>
        <CardTemplate :cardData="cardData"/>
    </template>
    <template #fallback> 
        <CardTemplateSkeleton />
    </template>
  </Suspense>
</template>