<script setup>

	import LayoutHeader from './components/LayoutHeader.vue';

	import { onMounted, ref } from 'vue';  	

	function langChanged(lang) {
		localStorage.setItem("lang", lang);
	}

	//ON MOUNTED
	onMounted (() => {		
		console.log('language: ' + localStorage.lang);
		if (localStorage.lang == null) {			
			localStorage.setItem("lang", 'es');			
		}

		//Progressive Web App
		let registration = null;

		if ("serviceWorker" in navigator) {
			window.addEventListener("load", function() {
				navigator.serviceWorker
				.register("/src/plugins/serviceWorker.js")
				.then(function(reg) {
					registration = reg;
					console.log("Service Worker registered");
				})
				.catch(err => console.log("Service Worker not registered", err))
			});
		}
	});
</script>

<template>
	<!-- v-model:language="$i18n.locale" @change="langChanged($i18n.locale)" -->
	<LayoutHeader />
	
	<router-view v-slot="{ Component }">
		<transition name="fade" mode="out-in">
			<component :is="Component" :key="$router.path" />
		</transition>
	</router-view>	
</template>

<style>
	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}

	.fade-enter-active,
	.fade-leave-active {
		transition: opacity .3s ease-out;
	}
</style>
