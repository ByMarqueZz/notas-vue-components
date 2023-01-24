import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { VueFire, VueFireAuth } from 'vuefire'
import {firebaseApp} from './firebase.js'
import { auth } from './firebase.js'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

import appComponent from './components/appComponent.vue'
import inicioSesion from './components/inicioSesion.vue'
import privado from './components/privado.vue'

import './assets/notas.css'

var estaAutenticado = false
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    estaAutenticado = true
    // ...
  } else {
    // User is signed out
    // ...
    estaAutenticado = false
    router.push('/')
  }
});
const routes = [
  {
    path: '/',
    component: appComponent
  },
  {
    path: '/inicioSesion',
    component: inicioSesion
  },
  {
    path: '/privado',
    component: privado,
    beforeEnter: (to, from) => {
      // reject the navigation
      if (estaAutenticado) {
        return true
      }
      return false
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app
  .use(VueFire, {
    // imported above but could also just be created here
    firebaseApp,
    modules: [
      // we will see other modules later on
      VueFireAuth(),
    ],
  })
app.use(router)
app.mount('#app')