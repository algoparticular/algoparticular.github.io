<script setup>
	import { getAuth } from 'firebase/auth';
	import { useRouter } from 'vue-router';
	import { onBeforeUnmount } from 'vue';

	const router = useRouter();
	const auth = getAuth();

	const authListener = auth.onAuthStateChanged(function(user) {
		if (!user) { // not logged in
			// alert('you must be logged in to view this. redirecting to the home page');
			router.push('/');
		}
	});

	onBeforeUnmount(() => {
		// clear up listener
		authListener();
	});
</script>

<template>
	<div class="content">
		<main id="deck">
			<h2>Mi colección</h2>
			<p>you can do it</p>
		</main>
	</div>
</template>