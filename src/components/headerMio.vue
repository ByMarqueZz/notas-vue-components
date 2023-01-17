<script setup>
  var titulo = ''
  const props = defineProps(['pendientes', 'totales'])
  const emit = defineEmits(['eventoNotas', 'eventoBorrarCompletadas'])
  function addNote() {
    
    emit('eventoNotas', titulo)
  }

  function borrarCompletadas() {
    emit('eventoBorrarCompletadas')
  }
</script>

<template>
  <h2 id="tittle">Proyecto de tareas - Juan A. Márquez</h2>
  <div id="divInput">
      <input v-model="titulo" type="text" id="inputText" placeholder="¿Qué quieres recordar?" v-on:keyup.enter="addNote()">
      <button id="inputButton" @click="addNote()">Enviar</button>
  </div>
  <p><b id="pendientes">{{ props.pendientes }}</b> Tareas pendientes de un total de <b id="totales">{{ props.totales }}</b> | <b id="completadas" @click="borrarCompletadas">X Borrar tareas completadas</b></p>
</template>

<style scoped>

</style>
