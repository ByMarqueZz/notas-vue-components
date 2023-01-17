<script setup>
    import { ref } from 'vue'
    const props = defineProps(['tittle', 'date', 'id', 'class', 'priority'])
    const emit = defineEmits(['eventoChecked', 'eventoDelete', 'eventoPriority'])
    var fecha = ref('')
    function calculateTime() {
        setInterval(() => {
            let date = new Date(props.date);
            let now = new Date();
            let time = now - date;
            let days = Math.floor(time / (1000 * 60 * 60 * 24));
            let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((time % (1000 * 60)) / 1000);
            if (days > 0) {
                fecha = `Añadido hace ${days} días`;
            } else if (hours > 0) {
                fecha = `Añadido hace ${hours} horas`;
            } else if (minutes > 0) {
                fecha = `Añadido hace ${minutes} minutos`;
            } else if (seconds > 0) {
                fecha = `Añadido hace ${seconds} segundos`;
            }
        }, 1000);
        return fecha;
            
    }
    function eventoBorrar() {
        emit('eventoDelete')
    }
    function eventoChecked() {
        emit('eventoChecked')
    }
    function eventoPriority(priority) {
        emit('eventoPriority', priority)
    }
</script>

<template>
    <div class='note' :id=props.id>
        <div class='note__firts'>
            <div :class=props.class :id=props.id @click="eventoChecked"></div>
            <div class='note__title'>
                <h2>{{ props.tittle }}</h2>
            </div>
            <div class='note__delete'>
                <button class='note__delete--button' :id=props.id @click="eventoBorrar"><img src='../../public/delete.png'></button>
            </div>
        </div>
        <div class='note__second'>
            <div class='note__priority'>
                <p>Prioridad: </p>
                <button class='note__priority--button--' :class="props.priority" :id=props.id value='note__priority--button--low' @click="eventoPriority('note__priority--button--low')"><img src='../../public/flecha_abajo.png' class='flechas'>Low</button>
                <button class='note__priority--button--' :class="props.priority" :id=props.id value='note__priority--button--normal' @click="eventoPriority('note__priority--button--norma')">Normal</button>
                <button class='note__priority--button--' :class="props.priority" :id=props.id value='note__priority--button--high' @click="eventoPriority('note__priority--button--high')"><img src='../../public/flecha_arriba.png' class='flechas'>High</button>
            </div>
            <div class='note__date'>
                <p>{{ calculateTime() }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
