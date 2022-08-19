<script setup>
	import Toolbar from './components/Toolbar.vue';	
	
	import { onMounted, ref } from 'vue';  	
	import { useRouter } from 'vue-router';

	const router = useRouter();	

	//ON MOUNTED
	onMounted (() => {
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
	<!-- <LayoutHeader /> -->
	
	<router-view v-slot="{ Component }">
		<transition name="fade" mode="out-in">
			<component :is="Component" :key="$router.path" />
		</transition>		
		<Toolbar :path="router.currentRoute.value.path"/>
	</router-view>	
</template>

<style scoped>
	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}

	.fade-enter-active,
	.fade-leave-active {
		transition: opacity .3s ease-out;
	}
</style>
