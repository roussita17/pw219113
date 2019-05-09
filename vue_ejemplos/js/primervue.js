const app = new Vue({
	el: '#app',
	data: {
		titulo: 'hola mundo en Vue',
		frutas: ['Manzana','Uvas','Peras','Fresas'], //arreglo sencillo
		frutas2: [ //areglo de objetos
		   {nombre:'Durazno', Cantidad: 11},
		   {nombre:'Guayaba', Cantidad: 0},
		   {nombre:'Frambuesa',Cantidad: 80},
		   {nombre:'Arandano',Cantidad: 110}

		],
		nuevaFruta: ''
	},
	methods:{
		agregarFruta(){
			//console.log("diste click");
			if(this.nuevaFruta!=''){
			this.frutas.push(this.nuevaFruta);
			this.frutas2.push({
				nombre: this.nuevaFruta,
				Cantidad: 0
			});
			this.nuevaFruta='';
			//funciona para limpiar el txt de nueva fruta y tambien porque estan enlazados los datos de aqui al input y viceversa
		}


		}
	},
	computed: {
		sumarFrutas(){
			this.total = 0;
			for(fruta of this.frutas2){
				this.total=this.total + fruta.Cantidad;
				//this.total+=fruta.Cantidad;
			}
			return this.total;

		}
	}
});