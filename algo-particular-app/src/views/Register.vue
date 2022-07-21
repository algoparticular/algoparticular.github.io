<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import { getAuth, 
             createUserWithEmailAndPassword,
             GoogleAuthProvider,
             signInWithPopup
           } from 'firebase/auth';

    const email = ref('');
    const password = ref('');
    const router = useRouter();
    const auth = getAuth();
    const errorMessage = ref('');

    const register = () => {
        createUserWithEmailAndPassword(auth, email.value, password.value)
            .then((data) => {
                console.log('succesful sign up!');

                console.log(auth.currentUser);

                router.push('/feed'); // redirect to the feed
            })
            .catch((error) => {
                console.log(error.code);
                errorMessage.value = error.message;
            })
    }

    const signInWithGoogle = () => {        
        const provider = new GoogleAuthProvider();

        signInWithPopup(getAuth, provider)
            .then((result) => {
                console.log(result.user);
                router.push('/feed');
            })
            .catch((error) => {
                
            });
    }
</script>

<template>
    <main class="formWrapper">
        <div class="heading">
            <h2>Crea una cuenta</h2>
            <p>Bienvenido, crea tu cuenta con tu email y contraseña</p>
        </div>  
        <div class="form">
            <input type="text" placeholder="Email" v-model="email" />
            <input type="password" placeholder="Contraseña" v-model="password" />
            <span v-if="errorMessage">{{ errorMessage }}</span>
        </div>      
        <div class="actions">
            <button @click="register">Quiero sumergirme</button>
            <!-- <button @click="signInWithGoogle">Sign in with Google</button> -->
        </div>
    </main>
</template>

<style scoped>

</style>