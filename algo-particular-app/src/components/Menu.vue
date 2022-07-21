<script setup>
    import { onMounted, ref } from 'vue';
    import { useRouter } from 'vue-router';
    import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

    const isLoggedIn = ref(false);
    const showMenu = ref(false);
    const router = useRouter();
    let auth;

    const props = defineProps({
        language: String,
    });

    onMounted (() => {
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
</script>


<template>
    <button class="transparent" @click="toggleMenu">
        <img src="../assets/icon/Menu.svg"/>
    </button>
    <nav v-if="showMenu">
        <button class="transparent" @click="toggleMenu">
            <img src="../assets/icon/Menu_white.svg"/>
        </button>
        <router-link to="/">Info</router-link> 

        <div v-if="isLoggedIn">
            <router-link to="/feed">Collection</router-link>
            <button class="logout" @click="handleSignOut" v-if="isLoggedIn">Exit</button>
        </div>
        <div v-else>
            <router-link to="/register">Register</router-link>
            <router-link to="/sign-in">Dive in</router-link>
        </div>
    </nav>  

    <!-- 
    <select class="lang" :value="language" @change="$emit('update:language', $event.target.value)">
        <option v-for="(locale, i) in $i18n.availableLocales" :key="i" :value="locale">{{ locale.toUpperCase() }}</option>
    </select>
    -->   
</template>


<style scoped>
    nav {     
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 2;
        width: 270px;
        height: 100vh;
        padding: 16px 5%;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 32px;
        background: #363636;
        box-shadow: inset 0px 6px 9px rgba(16, 16, 15, 0.36), inset 0px -6px 9px rgba(16, 16, 15, 0.36);
    }

    nav div {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 32px;
    }

    a {
        color: #F7F8F1;
        font-size: 21px;
    }

    a:hover {
        color: #FFFFFF;
    }

    button.transparent {
        z-index: 1;
        padding: 0;
        background: transparent;
        filter: drop-shadow(0px 2px 3px rgba(16, 16, 15, .36));
        display: flex;
        justify-content: center;
        align-items: center;
    }

    button.transparent:hover {
        background: transparent;
    }

    button.logout {
        background: transparent;
        color: #F18B7E;
    }

    button.logout:hover {
        background: transparent;
        color: #FFFFFF;
    }
</style>