<script setup>
</script>

<template>
    <div>
        <header id="headerApp">
            <router-link to="/">Home</router-link>
            <router-link to="/inicioSesion">Inicio de sesión</router-link>
            <router-link to="/privado">Privado</router-link>
        </header>

        <main>
            <router-view />
        </main>
    </div>
</template>