<script setup>
    import Toolbar from '../components/Toolbar.vue';
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

    // TEMP: ARMO OBJETO Y ENVIO A TEMPLATES
    const cardData = {
        name: props.name,
        description: props.description,
        image: props.image,
        afirmation: props.afirmation,
        invitation: props.invitation
    };

    //DATA PRUEBA
    // const cardData = {
    //     name: "Compromiso",
    //     description: "Al comprometerte con tu visión alineando tus pensamientos e intenciones por alcanzar aquello que anhelas, encuentras la paz de saber que estas avanzando en la dirección correcta. Tu camino se ilumina por el solo hecho de comprometerte con tu búsqueda, cualquiera ella sea. Si aún no hay claridad en la visión de tu deseo, lleva tu intención a iluminar tu búsqueda. Mientras la búsqueda hacia el anhelo del alma este activa habrá paz.",
    //     image: "./src/assets/gallery/parami_4.jpg",
    //     afirmation: "Estoy comprometida con mi búsqueda y visión.",
    //     invitation: "Hoy me comprometo a seguir el camino de mi corazón."
    // };

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
  <Toolbar :isCollect="true"/>
</template>