<script setup>
	import Toolbar from '../components/Toolbar.vue';
	// import { onMounted, ref } from 'vue';
	// import { useRouter } from 'vue-router';

	// const router = useRouter();
    

	// //ON MOUNTED
	// onMounted (() => {
		
	// });
</script>

<template>
	<div class="content">
		<main id="home">
			<img class="title" alt="Praxis, by Algo Particular" src="../assets/Logo_praxis.svg">

			<section class="intro">
				<p>Una parte de nuestros átomos, y los de todo lo que existe, vienen navegando el Universo desde el principio de los tiempos. Esas partículas cargan con cientos de miles de historias, y cada una de ellas nos comparte un aprendizaje. 
					<br><br>
				Cierra tus ojos e intenciona el mensaje que estas partículas tienen para vos.
					<br><br>  
				Cuando estés listx, elije una carta del maso.</p>
				<!-- <button @click="getMessage()">{{ $t("message.cardMessageButton") }}</button> -->
			</section>
		</main> 
		<Toolbar />
	</div>
</template>

<style>
	main#home {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		padding-top: 80px;
	}

	#home .title {
		width: 50vw;
		max-width: 300px;
	}

	section {
		padding: 100px 0;
	}

	section p {
		width: 326px;
		text-align: justify;

	}
</style>