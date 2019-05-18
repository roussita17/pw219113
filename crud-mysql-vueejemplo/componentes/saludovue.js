Vue.component('saludo',{
    template: // es plantilla que va a tener codigo
     //comilla francesas nos permite aceptar mas linea de  codigo y prmite la interpolacion de variables, dentro de los string (javascript)
     `
         <div>
            <h1> {{ saludo }}</h1>
        </div>
     `,
     data() { // los datos que contienen con la variable data
       return {
           saludo: 'Hola desde un componente'
        }
      }
})