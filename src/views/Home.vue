<script setup>
	
</script>

<template>
	<div class="content">
		<main id="home">
			<!-- <img class="title" alt="Praxis, by Algo Particular" src="../assets/Logo_praxis.svg"> -->
			<div class="cover">

			</div>

			<section class="intro">
				<p>{{ $t("message.praxisIntro") }}</p>
			</section>
		</main> 
	</div>
</template>

<style scoped>
	main#home {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	/* #home .title {
		width: 50vw;
		max-width: 300px;
	} */

	#home .cover {
		width: 100%;
		height: 0;
        padding-top: 100%;

		background-image: url('../assets/onboarding_2.jpg');
		background-repeat: no-repeat;
		background-size: cover;
	}

	section {
		padding: 40px 0;
	}

	section p {
		width: 326px;
		text-align: justify;

	}
</style>