<script setup>
    import { onMounted, ref } from 'vue';
    import { useRouter } from 'vue-router';
    
    const router = useRouter();
    const props = defineProps({
        isCollect: Boolean
    });	
    
	function loadDeck() {
		router.push('/deck');
	}

    function collectCard() {
		console.log('collected');
	}

	//ON MOUNTED
	onMounted (() => {
		
	});
</script>

<template>
    <div id="toolbar">
        <button v-if="isCollect" class="main collect" @click="collectCard()"></button>
		<button v-else class="main" @click="loadDeck()"></button>
	</div>
</template>

<style>
    #toolbar {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 60px;
        z-index: 1;

        background: url(../assets/toolbar.svg) no-repeat;
        background-position: 50% -3px;   
        
        background-color: rgba(247, 248, 241, 0.18);
        backdrop-filter: blur(6px);     
    }

    button.main {     
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
        border-radius: 100%;

        width: 60px;
        height: 60px;

        bottom: calc(var(--toolbar-height) - 33px);
        box-shadow: 0px 2px 6px rgba(16, 16, 15, 0.36); 
        
        background-image: url('../assets/icon/Particular.svg');
        background-color: #F4844C;
        background-repeat: no-repeat;
        background-position: 50%;
        background-size: 50%;
    }

    button.main:hover {
        background-color: #10100F;
    }

    button.collect {
        background-image: url('../assets/icon/Piringundin.svg');
    }
</style>