<script setup>
    import { ref } from 'vue';

	const props = defineProps({        
        index: Number,
        source: String,
        color: String
    });

    // const emit = defineEmits(['active']); 

    // const active = (index) => {
    //     emit('isActive', index);
    // }

</script>

<template>
	<div class="slide" :style="`background-color:${props.color}`">
        <div class="cover" :style="`background-image:url(${props.source})`">

        </div>
	</div>
</template>

<style>
    .slide {
        height: 100vh;
        width: 100vw;
        scroll-snap-align: center;
    }

	.slide .cover {
		width: 100%;
		height: 66vh;

		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}	

    /* DESKTOP */
    @media screen and (min-width: 769px) {
        .slide .cover {
            height: 87vh;
        }
    }
</style>