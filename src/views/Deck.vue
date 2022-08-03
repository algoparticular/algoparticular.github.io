<script setup>
    import DeckTemplate from '../components/DeckTemplate.vue';
    import DeckTemplateSkeleton from '../components/DeckTemplateSkeleton.vue';

    import { useRouter } from 'vue-router';
    const router = useRouter();

    const navigate = (url) => {
        router.push({ path: url, replace: true });
    };
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
        <button @click="navigate('/')"></button>
    </div>
</template>

<style>
    .content.deck {
        padding-top: 9vh;
    }

    .deck button {   
        margin-top: 48px;     
        height: 40px;
        background-repeat: no-repeat;
        background-color: transparent;
        background-image: url('../assets/icon/Back.svg');
        filter: drop-shadow(0px 2px 6px rgba(16, 16, 15, 0.36));
    }

    /* DESKTOP */
    @media screen and (min-width: 768px) {
        .content.deck {
            padding: 40px 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: auto;
        }
    }
    
</style>