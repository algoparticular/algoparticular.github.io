<script setup>

	import LayoutHeader from './components/LayoutHeader.vue';
	import Toolbar from './components/Toolbar.vue';

	import { onMounted, ref } from 'vue';  	

	function langChanged(lang) {
		localStorage.setItem("lang", lang);
	}

	//ON MOUNTED
	onMounted (() => {		
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
    <layout-header :hasnav="true" ></layout-header>
    <router-view />
	<Toolbar />
</template>
