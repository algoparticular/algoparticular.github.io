<script setup>
    import { onUpdated, ref } from 'vue';
    import { useRouter } from 'vue-router';
    import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
    
    const isLoggedIn = ref(false);
    const showMenu = ref(false);
    const hideToolbar = ref(false);
    const highlightIcon = ref(false);
    const collectButton = ref(false);
    const router = useRouter();
    let auth;

    const props = defineProps({
        path: String,
        language: String,
    });        

    function collectCard() {        
		console.log('collected');

        router.push('/deck'); //temp
	}

    //handle sign out
    const handleSignOut = () => {
        signOut(auth).then (() => {
            router.push('/');
        });
    }; 

    //handle menu
    const toggleMenu = () => {
        showMenu.value = !showMenu.value;
    };

    //handle navigation
    const navigate = (url) => {
        router.push({ path: url, replace: true });
        showMenu.value = false;
    };

	//ON MOUNTED
	onUpdated (() => {
        //Update depending path		
        switch(props.path) {
            case '/card':
                collectButton.value = true;
                hideToolbar.value = false;
                break;
            case '/collection':
                highlightIcon.value = true;
                hideToolbar.value = false;
                break;
            case '/deck':
                //esconder toolbar
                hideToolbar.value = true;
                break;
            default:
                collectButton.value = false;
                highlightIcon.value = false;
                hideToolbar.value = false;
        }

        //check user logged in or not
        auth = getAuth();
        onAuthStateChanged (auth, (user) => {
            if (user) {
                isLoggedIn.value = true;
            } else {
                isLoggedIn.value = false;
            }
        });
	});
</script>

<template>
    <div id="toolbar" :class="{active: showMenu, hidden: hideToolbar}">
        <div class="buttons">
            <button class="secondary collection" :class="{active: highlightIcon}" @click="navigate('/collection')"></button>

            <button v-if="collectButton" class="main collect" @click="collectCard()"></button>
            <button v-else class="main" @click="navigate('/deck')"></button>
            
            <button class="secondary menu" :class="{active: showMenu}" @click="toggleMenu()"></button>
        </div>
        <transition name="fade" mode="out-in">
            <nav v-if="showMenu">
                            
                <a @click="navigate('/')">Info</a>
                <a target="_blank" href="https://cafecito.app/algoparticular">Buy us a tee</a>

                <div v-if="isLoggedIn">
                    <!-- <router-link to="/collection">Collection</router-link> -->                    
                    <a class="logout" @click="handleSignOut" v-if="isLoggedIn">Take me out of here</a>
                </div>
                <div v-else>
                    <!-- <router-link to="/register">Register</router-link>
                    <router-link to="/sign-in">Dive in</router-link> -->
                    <a @click="navigate('/register')">I want an account</a>
                    <a @click="navigate('/sign-in')">Log me in</a>
                </div>
            </nav>  
        </transition>
	</div>
</template>

<style scoped>
    #toolbar {
        display: block;
        position: fixed;
        bottom: 0;
        width: 90vw;
        height: 50px;
        padding: 0 5vw;     

        /* background: url(../assets/toolbar.svg) no-repeat; */
        /* background-position: 50% -3px;    */
        
        background: rgba(247, 248, 241, 0.3);
        border-radius: 18px 18px 0 0;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(6px);
        -webkit-backdrop-filter: blur(6px);
        border: 1px solid rgba(255, 255, 255, 0.3);
        
        transition: all .18s ease-out;
    }

    #toolbar.active {
        display: flex;
        flex-direction: column;

        height: 30vh;
        gap: 16px;
    }

    #toolbar.hidden {
        display: none;
    }

    div.buttons {
        height: 50px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    button {
        background: transparent;
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

        bottom: 30px;
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

    button.secondary {
        height: 40px;
        background-repeat: no-repeat;
        background-image: url('../assets/icon/Menu.svg');
        filter: drop-shadow(0px 2px 6px rgba(16, 16, 15, 0.36));
    }

    button.secondary.active {
        background-image: url('../assets/icon/active/Menu.svg');
        filter: drop-shadow(0px 2px 3px rgba(244, 132, 76, 0.56));
    }

    button.secondary.collection {
        background-image: url('../assets/icon/Collection.svg');
    }

     button.secondary.collection.active {
        background-image: url('../assets/icon/active/Collection.svg');        
    }

    nav, nav div {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 24px;
    }

    nav a {
        font-size: 21px;
        font-family: 'particular', 'Inter', helvetica, sans-serif;
    }

    nav a:hover {
        color: #363636;
    }

    a.logout {
        color: #363636;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }

	.fade-enter-active,
	.fade-leave-active {
        transition: opacity .8s ease-out;
	}
</style>