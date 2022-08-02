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
    <p>Mezclando cartas...</p>
    <div class="deckWrapper">
        <template v-for="item in 60" :key="item">
            <DeckItem :loading="true"  />
        </template>
    </div>
</template>

<style>
    .deckWrapper {
        display: flex;
        flex-wrap: wrap;
        width: calc(94px * 3 + 8px * 2);
        margin: 0 auto;
        gap: 8px;
    }

    /* DESKTOP */
    @media screen and (min-width: 900px) and (max-width: 1280px) {
        .deckWrapper {
            width: calc(94px * 9 + 8px * 8);
        }
    }

    /* XL */
    @media screen and (min-width: 1281px) {
        .deckWrapper {
            width: calc(94px * 11 + 8px * 10);
        }
    }
</style>