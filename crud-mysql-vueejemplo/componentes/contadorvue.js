Vue.component('contador',{
    template: // es plantilla que va a tener codigo
     //comilla francesas o comilla invertida, nos permite aceptar mas linea de  codigo y prmite la interpolacion de variables, dentro de los string (javascript)
     ` 
         <div> 
            <h3>{{ numero }}</h3>
            <button @click="numero++">+</button>
        </div>
     `,
     // cada componente debe ir encerrado en un div(contenedor) si no, no funcionara 
     data() { 
         // los datos que contienen con la variable data
       return {
           numero: 0
        }
      }

      
})