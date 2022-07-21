<template>
    <h1>Create an Account</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p v-if="errorMessage">{{ errorMessage }}</p>
    <p><button @click="register">Submit</button></p>
    <!-- <p><button @click="signInWithGoogle">Sign in with Google</button></p> -->
</template>

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