Vue.component('componente2',{ //Vuex.js  es lo mismo de Redux en react
    template:

    //componente 1 este dentro de componente 2 y esten en comunicacion de datos
     `
       <div style='background:blue;padding:20px;margin-bottom:20px'> 
        <h2>Componente 2: {{ numero }}</h2>
        {{ nombre }}
        </div>
     `,
     props: ['numero'],// propiedad es un arreglo
     data(){
         return {
             nombre:'PW'
         }
     },
     mounted(){ // se dibuja totalmente el DOM CON EL EVENTO MOUNTED
         this.$emit('nombreComp2', this.nombre) // $ emite un evento
     }

})