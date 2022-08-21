<script setup>
	import IntroMenu from '../components/IntroMenu.vue';
</script>

<template>
	<div class="content home">
		<main id="home">
			<!-- <img class="title" alt="Praxis, by Algo Particular" src="../assets/Logo_praxis.svg"> -->
			<div class="cover">

			</div>
		</main>
		<IntroMenu /> 
	</div>
</template>

<style>
	.home + #toolbar {
		display: none;
	}

	.content.home {
		background-color: #0282BB;
	}

	main#home {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	#home .cover {
		width: 100%;
		height: 60vh;
        /* padding-top: 100%; */

		background-image: url('../assets/onboarding_2.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: 50%;
	}	

</style>