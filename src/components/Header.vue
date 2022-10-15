<script setup>
    import { onMounted, ref } from 'vue';
    import { useRouter } from 'vue-router';
    import Menu from './Menu.vue';

    const showMenu = ref(false);

    const router = useRouter();
    
    
    //handle menu
    const toggleMenu = () => {
        showMenu.value = !showMenu.value;

        if(showMenu) {
            document.addEventListener('click', closeIfClickedOutsideHome);
        }
    };

    const closeIfClickedOutsideHome = (event) => {
        if (!document.getElementById('panel').contains(event.target)) {
            showMenu.value = false;

            document.removeEventListener('click', closeIfClickedOutsideHome);
        }
    };

    //handle navigation
    const handleNavigate = (url) => {        
        showMenu.value = false;
        router.push({ path: url }); //, replace: true
    };

    //handle language change
    function handleLangChanged(lang) {		
		localStorage.setItem("lang", lang);
        showMenu.value = false;
	}
</script>

<template>
    <header>
        <div id="logo">
            <!-- <img src="../assets/icon_praxis.svg"/> -->
        </div>  

        <Transition name="slide-fade" mode="out-in">
            <Menu v-if="showMenu" 
                @navigate="handleNavigate"
                @langChanged="handleLangChanged"
                class="home"
                />
        </Transition>
		<button id="menuButton" class="secondary menu" :class="{active: showMenu}" @click="toggleMenu()"></button>	                         
    </header>
</template>

<style>    
    header {
        padding: 16px 2vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        z-index: 11;
        width: 96vw;

        /* background: rgba(247, 248, 241, 0.18); */
        /* backdrop-filter: blur(6px); */
    }    

    #logo {
        display: flex;
        justify-content: center;
        align-items: center;
        filter: drop-shadow(0px 2px 3px rgba(16, 16, 15, .36));
    }

    #logo img {
        width: 50px;
    }

</style>