<script setup>    
    import CardTemplate from '../components/CardTemplate.vue';
    import CardTemplateSkeleton from '../components/CardTemplateSkeleton.vue';

    console.log('card please');
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
    </div>
</template>

<style>
    
</style>