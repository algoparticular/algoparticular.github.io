<script setup>
    import { onMounted, ref } from 'vue';
    import { useRouter } from 'vue-router';
    import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

    const isLoggedIn = ref(false);
    const router = useRouter();
    let auth;

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

    const props = defineProps({
        hasnav: Boolean,
        language: String
    });
</script>

<template>
    <header>
        <nav v-if="hasnav">
            <router-link to="/">?</router-link> 

            <div v-if="isLoggedIn">
                <router-link to="/feed">Collection</router-link>
                <button @click="handleSignOut" v-if="isLoggedIn">Exit</button>
            </div>
            <div v-else>
                <router-link to="/register"> Register </router-link>
                <router-link to="/sign-in"> Dive in </router-link>
            </div>
        </nav>  

        <div id="logo">
            <img src="../assets/icon_praxis.svg"/>
        </div>

        <!-- <nav v-if="hasnav">
            <select class="lang" :value="language" @change="$emit('update:language', $event.target.value)">
                <option v-for="(locale, i) in $i18n.availableLocales" :key="i" :value="locale">{{ locale.toUpperCase() }}</option>
            </select>
        </nav> -->              
    </header>
</template>

<style>
    #logo img {
        width: 50%;
    }

    header {
        padding: 16px;
        position: relative;
        display: flex;
        justify-content: space-between;
        position: fixed;
        width: 100%;
    }

    nav {        
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 32px;
    }

    nav div {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 32px;
    }
    
</style>