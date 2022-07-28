<script setup>
    import CardTemplate from '../components/CardTemplate.vue';
    import CardTemplateSkeleton from '../components/CardTemplateSkeleton.vue';
    
    import { onBeforeMount, ref } from 'vue';
    import { useRouter } from 'vue-router';

    const router = useRouter();
    const props = defineProps({
        id: String,
        name: String,
        description: String,
        afirmation: String,
        invitation: String,
        category: String,
        rarity: String
    });

    // TEMP: ARMO OBJETO Y ENVIO A TEMPLATES
    const cardData = {
        id: props.id,
        name: props.name,
        description: props.description,
        afirmation: props.afirmation,
        invitation: props.invitation,
        category: props.category,
        rarity: props.rarity
    };

    //DATA PRUEBA
    // const cardData = {
    //     id: 20,    
    //     name: "Compromiso",
    //     description: "Al comprometerte con tu visión alineando tus pensamientos e intenciones por alcanzar aquello que anhelas, encuentras la paz de saber que estas avanzando en la dirección correcta. Tu camino se ilumina por el solo hecho de comprometerte con tu búsqueda, cualquiera ella sea. Si aún no hay claridad en la visión de tu deseo, lleva tu intención a iluminar tu búsqueda. Mientras la búsqueda hacia el anhelo del alma este activa habrá paz.",
    //     image: "./src/assets/gallery/parami_4.jpg",
    //     afirmation: "Estoy comprometida con mi búsqueda y visión.",
    //     invitation: "Hoy me comprometo a seguir el camino de mi corazón."
    //     category: "regular",    
    //     rarity: 3,    
    // };

    onBeforeMount (() => {
        if(props.name == null || props.description == "") {
            router.push('/deck');
        }
    });
</script>

<template>
    <div class="content">
        <Suspense>
            <template #default>
                <CardTemplate :cardData="cardData"/>
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
        margin-top: 0;
    }

    /* DESKTOP */
    @media screen and (min-width: 768px) {
        .cardWrapper {
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 48px;
            margin-top: 100px;
        }
    }
</style>