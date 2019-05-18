Vue.component('componente1',{
    template:

    //componente 1 este dentro de componente 2 y esten en comunicacion de datos
     `
        <div style='background:red;padding:2px'>
         <h2>Componente 1: {{ numeroComponente1 }}</h2>
         <button @click="numeroComponente1++">+</button>
         <componente2 v-bind:numero="numeroComponente1" @nombreComp2="nombreComp1=$event"></componente2>
         {{ nombreComp1 }}
        </div>
     `,
     //:(baiding) numero, es enlazar una cosa con otra
     //baid es la conexcion de el dato que esta ne componente 1 conectandolo atraves de la propiedad -
     //numero al componente2(cambios que sufra uno lo ufrira el otro) dos variables como si fuera una.

     // numero ="10" es un apropiedad y se cacha en props del compoente1.js
     // todo lo que se ponen dentro de las etiquetas son propiedades
     data(){
         return{
             numeroComponente1: 0,
             nombreComp1:''
         }
     }
})