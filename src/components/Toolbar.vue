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

    //handle language change
    function langChanged(lang) {		
		localStorage.setItem("lang", lang);
        showMenu.value = false;
	}

	//ON MOUNTED
	onUpdated (() => {
        //check user logged in or not
        auth = getAuth();
        onAuthStateChanged (auth, (user) => {
            if (user) {
                isLoggedIn.value = true;
            } else {
                isLoggedIn.value = false;
            }
        });

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

        // lang storage fallback
        if (localStorage.lang == null) {			
			localStorage.setItem("lang", 'es');			
		}
	});
</script>

<template>
    <div id="toolbar" :class="{active: showMenu, hidden: hideToolbar}">
        <div class="buttons">
            <button class="secondary collection" :class="{active: highlightIcon}" @click="navigate('/')"></button>

            <button v-if="collectButton" class="main collect" @click="collectCard()"></button>
            <button v-else class="main" @click="navigate('/deck')"></button>
            
            <button class="secondary menu" :class="{active: showMenu}" @click="toggleMenu()"></button>
        </div>
        <transition name="fade" mode="out-in">
            <nav v-if="showMenu">
                            
                <a @click="navigate('/')">{{ $t("message.praxisNavInfo") }}</a>
                <a target="_blank" href="https://cafecito.app/algoparticular">{{ $t("message.praxisNavDonate") }}</a>

                <div id="languageSelect">
                    <input type="radio" id="lang-es" value="es" v-model="$i18n.locale" @change="langChanged($i18n.locale)"/>
                    <label for="lang-es" :class="{active: $i18n.locale == 'es'}">es</label>
                    <span>|</span>
                    <input type="radio" id="lang-en" value="en" v-model="$i18n.locale" @change="langChanged($i18n.locale)"/>
                    <label for="lang-en" :class="{active: $i18n.locale == 'en'}">en</label>
                </div>

                <!-- <div v-if="isLoggedIn">
                    <a class="logout" @click="handleSignOut" v-if="isLoggedIn">{{ $t("message.praxisNavLogout") }}</a>
                </div>
                <div v-else>
                    <a @click="navigate('/register')">{{ $t("message.praxisNavRegister") }}</a>
                    <a @click="navigate('/sign-in')">{{ $t("message.praxisNavSignin") }}</a>
                </div> -->
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
        
        background: rgba(243, 243, 243, 0.18);
        border-radius: 18px 18px 0 0;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(6px);
        -webkit-backdrop-filter: blur(6px);
        border: 1px solid rgba(255, 255, 255, 0.18);
        
        transition: all .18s ease-out;
    }

    #toolbar.active {
        display: flex;
        flex-direction: column;

        /* default size + listItem-height * amount of items */
        /* height: calc(50px + 40px * 5); */
        height: 280px;
        justify-content: space-around;
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
        background-color: #FF6F61;
        background-repeat: no-repeat;
        background-position: 50%;
        background-size: 50%;
    }

    #toolbar.active button.main {
        bottom: 30px;
    }

    button.main:hover {
        background-color: #FF6F61;
    }

    button.collect {
        background-image: url('../assets/icon/Brote.svg');
    }

    button.secondary {
        height: 40px;
        background-repeat: no-repeat;
        background-image: url('../assets/icon/Menu.svg');
        filter: drop-shadow(0px 2px 3px rgb(199, 190, 142));
    }

    button.secondary.active {
        background-image: url('../assets/icon/active/Menu.svg');
        filter: drop-shadow(0px 2px 3px rgba(252, 118, 16, 0.56));
    }

    button.secondary.collection {
        background-image: url('../assets/icon/Collection.svg');
    }

     button.secondary.collection.active {
        background-image: url('../assets/icon/active/Collection.svg');        
    }
    
    button.secondary:focus {
        box-shadow: none;
    }

    nav {
        padding-bottom: 24px;
    }

    nav, nav div {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 24px;
    }

    nav a,
    #languageSelect label {
        font-size: 21px;
        font-family: 'particular', 'Inter', helvetica, sans-serif;
        font-weight: 400;
        cursor: pointer;
    }

    nav a:hover,
    #languageSelect label:hover {
        color: #FF6F61;
    }

    a.logout {
        color: #FF6161;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }

	.fade-enter-active,
	.fade-leave-active {
        transition: opacity .8s ease-out;
	}

    #languageSelect {
        display: flex;
        flex-direction: row;
    }

    #languageSelect input {
        display: none;
    }

    #languageSelect label {
        color: #F7F8F1;
    }

    #languageSelect label.active {
        color: #FF6F61;
    }

    #languageSelect span {
        font-size: 24px;
        font-family: 'particular', 'Inter', helvetica, sans-serif;
        font-weight: 400;

        /* NOT SELECTABLE */
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
                user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome, Edge, Opera and Firefox */
    }
</style>