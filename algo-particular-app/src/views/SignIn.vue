<template>
    <h1>Dive in</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p v-if="errorMessage">{{ errorMessage }}</p>
    <p><button @click="signIn">Submit</button></p>
    <!-- <p><button @click="signInWithGoogle">Sign in with Google</button></p> -->
</template>

<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

    const email = ref('');
    const password = ref('');
    const router = useRouter();
    const auth = getAuth();
    const errorMessage = ref('');

    const signIn = () => {
        signInWithEmailAndPassword(auth, email.value, password.value)
            .then((data) => {
                console.log('succesful sign in!');

                console.log(auth.currentUser);

                router.push('/feed'); // redirect to the feed
            })
            .catch((error) => {
                console.log(error.code);
                
                switch(error.code) {
                    case "auth/invalid-email":
                        errorMessage.value = "Invalid email";
                        break;
                    case "auth/user-not-found":
                        errorMessage.value = "No account with this email was found";
                        break;
                    case "auth/wrong-password":
                        errorMessage.value = "Incorrect password";
                        break;
                    default:
                        errorMessage.value = "Email or Password was incorrect";
                        break;
                }
            })
    }
</script>