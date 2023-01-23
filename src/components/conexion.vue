<script setup>
    import { useCollection, useFirestore } from 'vuefire'
    import { collection, addDoc, deleteDoc, doc } from 'firebase/firestore'
    const db = useFirestore()
    const todos = useCollection(collection(db, 'recordatorios'))
    function nuevaNota() {
        const docRef = addDoc(collection(db, "recordatorios"), {
            titulo: "Tokyo",
            prioridad: "low",
            fecha : "",
            finalizado: false
        });
    }
    function borrarNota(id) {
        deleteDoc(doc(db, "recordatorios", id));
    }
    
</script>

<template>
    <button @click="nuevaNota()">Hola</button>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
     <span @click="borrarNota(todo.id)">{{ todo.titulo }}</span>
    </li>
  </ul>
</template>

<style scoped>

</style>
