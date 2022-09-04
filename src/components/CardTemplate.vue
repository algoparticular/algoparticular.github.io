<script setup>
	import { onBeforeMount, ref } from 'vue';

    //Database
    import Airtable from "airtable";
    const base = new Airtable({ apiKey: "keyLdBi48iZZkEOMG" }).base("appgHXHkRRjGjbYgM");

    const props = defineProps({
        id: String
    });

    const card = ref({});
    const cover = ref('');
    const color = ref('');
    const colorAlt = ref('');  

    //This make possible the loading skeleton state
    const loadCardData = async () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 4000)
        })
    }
    
    const data = ref(await loadCardData());

    onBeforeMount (() => {
        base('Oracle cards').select({
            view: 'List'
        }).firstPage(function(err, records) {
            if (err) { console.error(err); return; }

            card.value = records[props.id].fields;

            cover.value = 'url(' + card.value.image[0].url + ')';
            color.value = card.value.color;
            colorAlt.value = card.value.colorAlt;
        });
    });   
</script>

<template>
	<main class="cardWrapper" :class="{fixedHeight: card.invitation === ' '}">
        <div class="imgWrapper"></div>
        
        <div class="textWrapper">
            <h4>
                {{ card['name_'+this.$i18n.locale] }}
            </h4>
            <p class="">
                {{ card['description_'+this.$i18n.locale] }}
            </p>
            <div class="bottom">
                <div>
                    <h5 v-if="card.invitation != ' '">
                        {{ $t("oracle.cardAfirmattion") }}
                    </h5>
                    <p>
                        {{ card['affirmation_'+this.$i18n.locale] }}
                    </p>
                </div>
                <div v-if="card.invitation != ' '">
                    <h5>
                        {{ $t("oracle.cardInvitation") }}
                    </h5>
                    <p>
                        {{ card['invitation_'+this.$i18n.locale] }}
                    </p>
                </div>
            </div>
        </div>        
    </main>
</template>

<style>
    h4, h5, p {
        color: v-bind(colorAlt);
    }

    .cardWrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        background-color: v-bind(color);
    }

    .cardWrapper.fixedHeight {
        height: 100vh;
        justify-content: flex-start;
    }

    .imgWrapper {
        width: 100%;
        height: 0;
        padding-top: 100%;
        overflow: hidden;

        background-image: v-bind(cover);
        background-size: cover;
        box-shadow: inset 0px 6px 9px rgba(16, 16, 15, 0.36), inset 0px -6px 9px rgba(16, 16, 15, 0.36);              
    }

    .textWrapper {
        padding: 32px 40px 100px;
    }

    .textWrapper h4 {
        letter-spacing: .03em;
    }

    .textWrapper p {
        padding: 0;
        text-align: justify;
        white-space: pre-line;
    }

    .bottom {
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding-top: 24px;
    }

    .bottom h5 {
        text-align: center;
    }

    .bottom p {
        text-align: center;
    }

    /* DESKTOP */
    @media screen and (min-width: 768px) {

        .cardWrapper {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;            
            width: 100vw;
            height: 100vh;
        }

        .imgWrapper {
            width: 50%;
            height: 100%;
            padding-top: 0;
            border-radius: 0;
            background-size: cover;
            background-position: 50%;
        }

        .textWrapper {
            width: 40%;
            padding: 0 5%;
        }
    }
</style>