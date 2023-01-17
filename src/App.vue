<script setup>
  import { ref } from 'vue'
  import headerMio from './components/headerMio.vue'
  import nota from './components/nota.vue'
  function addNote(titulo) {
    let now = new Date();
    arrayNotes.value.push({ id: arrayNotes.value.length, tittle: titulo, priority: 'low', date: now, classTittle: 'note__title', class: 'note__checked'})
    totales.value++
    pendientes.value++
  }

  function borrarNota(id) {
    arrayNotes.value = arrayNotes.value.filter(nota => nota.id != id)
    totales.value--
    pendientes.value--
  }

  function cambiarChecked(id) {
    arrayNotes.value = arrayNotes.value.map(nota => {
      if (nota.id == id) {
        if (nota.class == 'note__checked') {
          nota.class = 'note__checked note__checked--checked'
          nota.classTittle = 'note__title note__title--checked'
          pendientes.value--
        } else {
          nota.class = 'note__checked'
          nota.classTittle = 'note__title'
          pendientes.value++
        }
      }
      return nota
    })
  }

  function borrarCompletadas() {
    arrayNotes.value = arrayNotes.value.filter(nota => nota.class != 'note__checked note__checked--checked')
    pendientes.value = arrayNotes.value.length
    totales.value = arrayNotes.value.length
  }

  function cambiarPrioridad(priority, id) {
    arrayNotes.value = arrayNotes.value.map(nota => {
      if (nota.id == id) {
        nota.priority = priority
      }
      return nota
    })
  }

  var arrayNotes = ref([])
  var pendientes = ref(0)
  var totales = ref(0)
</script>

<template>
  <header>
    <headerMio :pendientes="pendientes" :totales="totales" @eventoNotas="addNote" @eventoBorrarCompletadas="borrarCompletadas"/>
  </header>

  <main>
    <nota v-for="nota in arrayNotes" :classTittle="nota.classTittle" :class="nota.class" :tittle="nota.tittle" :priority="nota.priority" @eventoDelete="borrarNota(nota.id)" @eventoChecked="cambiarChecked(nota.id)" @eventoPriority="cambiarPrioridad(priority, nota.id)"></nota>
  </main>
</template>

<style scoped>

</style>
