<script setup>

</script>

<template>
<div class="content">
	<main id="home">
		<img class="title" alt="Praxis, by Algo Particular" src="../assets/Logo_praxis.svg">

		<section class="intro">
			<h2>{{ $t("message.notFound") }}</h2>
			<p>{{ $t("message.notFoundCopy") }}</p>
			<!-- <p>{{ $t("message.notFoundButton") }}</p> -->
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