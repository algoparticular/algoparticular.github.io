<script setup>
    import Toolbar from '../components/Toolbar.vue';	
    import CardTemplate from '../components/CardTemplate.vue';
    import CardTemplateSkeleton from '../components/CardTemplateSkeleton.vue';

</script>

<template>
    <div class="content">
        <Suspense>
            <template #default>
                <CardTemplate :id="$route.params.id"/>
            </template>
            <template #fallback> 
                <CardTemplateSkeleton :id="$route.params.id"/>
            </template>
        </Suspense>
        <Toolbar :shareAction="true" :cardId="$route.params.id"/> 
    </div>
</template>

<style>
    
</style>