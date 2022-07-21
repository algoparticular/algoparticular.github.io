<script setup>
    import { onMounted, ref } from 'vue';
    import { useRouter } from 'vue-router';

	const router = useRouter();
    
	function loadDeck() {
		router.push('/deck');
	}

	//ON MOUNTED
	onMounted (() => {
		
	});
</script>

<template>
    <div id="toolbar">
		<button class="main" @click="loadDeck()">
			
		</button>
	</div>
</template>

<style>
    #toolbar {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 60px;

        background: url(../assets/toolbar.svg) no-repeat;
        background-position: 50% 0;        
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
</style>