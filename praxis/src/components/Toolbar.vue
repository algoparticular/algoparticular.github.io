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

        router.push('/deck'); //temp
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
        width: 100vw;
        height: 40px;

        /* background: url(../assets/toolbar.svg) no-repeat; */
        /* background-position: 50% -3px;    */
        
        background: rgba(255, 255, 255, 0.36);
        border-radius: 18px 18px 0 0;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(6px);
        -webkit-backdrop-filter: blur(6px);
        border: 1px solid rgba(255, 255, 255, 0.3);  
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

        bottom: 35px;
        box-shadow: 0px 2px 6px rgba(16, 16, 15, 0.36); 
        
        background-image: url('../assets/icon/Seed.svg');
        background-color: #F4844C;
        background-repeat: no-repeat;
        background-position: 50%;
        background-size: 50%;
    }

    button.main:hover {
        background-color: #10100F;
    }

    button.collect {
        background-image: url('../assets/icon/Brote.svg');
    }
</style>