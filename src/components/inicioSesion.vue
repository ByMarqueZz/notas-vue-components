<script setup>
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

var email = ref('')
var password = ref('')
function login() {
    const auth = getAuth();
signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

function loginGoogle() {
  const auth = getAuth();
  signInWithPopup(auth, new GoogleAuthProvider)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

</script>

<template>
    email: <input type="email" v-model="email" />
    password: <input type="password" v-model="password" />
    <button @click="login">Login</button>
    <button @click="loginGoogle">Google</button>
</template>