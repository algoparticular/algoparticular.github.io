<script setup>
    import { onMounted, ref } from 'vue';  

    const props = defineProps({
        amountOfCards: Number
    });
</script>

<script>    
    import DeckItem from "./DeckItem.vue";
    import { animate } from "motion";

    export default {
        components: { DeckItem },
        
        data() {
            return {
            
            }
        },

        methods: {        
            animateList() {
                // const paths = document.querySelectorAll("#cardLoader path");

        console.log('animation list');

                // animate(paths, 
                //     {strokeDasharray: 1000},
                //     {   duration: 3.6, 
                //         easing: [.63, 0, .72, 0]
                //     });

        console.log('animation list end');
            },   
        },
        mounted() {    
                // this.animateList();
        }
    }

</script>

<template>
    <p class="deckIntro">{{ $t("oracle.deckLoading") }}</p>
    <div class="deckWrapper">
        <template v-for="item in props.amountOfCards" :key="item">
            <DeckItem :loading="true"  />
        </template>
    </div>
</template>

<style>
    
</style>