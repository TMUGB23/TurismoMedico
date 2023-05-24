import { createApp } from 'vue'
import App from './App.vue'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

//Apartir de aqui se modifico
import {createRouter, createWebHashHistory} from 'vue-router'

import Inicio from '../src/components/Turismomedico.vue'
import Categorias from '../src/components/Categorias.vue' // Importa tu componente
import Tours from '../src/components/Tours.vue' // Importa tu componente
import Tour from '../src/components/Tour.vue' // Importa tu componente



//Definir rutas
const routes = [
      {
        path: '/',component: Inicio
      },
    {
      path: '/categorias',
      name: 'Categorias',
      component: Categorias // Agrega tu componente a la ruta
    },
  {
    path: '/tours',
    name: 'Tours',
    component: Tours // Agrega tu componente a la ruta
  },
{
  path: '/tour',
  name: 'Tour',
  component: Tour // Agrega tu componente a la ruta
}
    ]
  
    const router = createRouter({
        history: createWebHashHistory(),
        routes
    })

    
    export default router
    createApp(App).use(router).mount('#app')


//Apartir de aqui no se modifico
//createApp(App).mount('#app')
//    new Vue({
//  el: '#app',
//  router,
//  template: '<router-view></router-view>'
//})
