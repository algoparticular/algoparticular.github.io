<script setup>
    import CardTemplate from '../components/CardTemplate.vue';
    import CardTemplateSkeleton from '../components/CardTemplateSkeleton.vue';
    
    import { onMounted, ref } from 'vue';

    const props = defineProps({
        id: String
    });

    onMounted (() => {
       
    });
</script>

<template>
    <div class="content">
        <Suspense>
            <template #default>
                <!-- <CardTemplate :cardData="cardData"/> -->
                <CardTemplate :cardId="props.id"/>
            </template>
            <template #fallback> 
                <CardTemplateSkeleton />
            </template>
        </Suspense>
    </div>
</template>

<style>
    .cardWrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    /* DESKTOP */
    @media screen and (min-width: 768px) {
        .cardWrapper {
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 48px;
            width: 100vw;
            height: 100vh;
        }
    }
</style>