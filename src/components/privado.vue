<script setup>
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { ref } from 'vue'
import { auth } from '../firebase'

var nombreUsuario = ref('')
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    nombreUsuario.value = user.email
    // ...
  } else {
    // User is signed out 
    // ...
  }
});
function cerrarSesion() {
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log('Sign-out successful.')
    }).catch((error) => {
        // An error happened.
        console.log('An error happened.')
    });
}
</script>

<template>
    <h1>AREA PRIVADA</h1>
    <h2>Bienvenido {{ nombreUsuario }}</h2>
    <button @click="cerrarSesion">Cerrar sesión</button>
</template>