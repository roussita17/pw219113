const app = new Vue ({
    el: '#app', //elemento 
    data: {
        saludo: 'Hola Vue'
    },
    beforeCreate(){
        console.log('Antes de crear el objeto Vue');
    },
    created(){
        console.log('El objeto Vue fue creado'); 
    },
    beforeMount(){
        console.log('El DOM no se ha cargado');
    },
    mounted(){
        console.log('La pagina o DOM ah sido cargada');
    },
    beforeUpdate(){
        console.log('Antes de Actualiza cualquier elemento de la pagina');
    },
    updated(){
        console.log('La pagina ah sido atualizada');
    },
    beforeDestroy(){
        console.log('Antes de destruir el objeto Vue');
    },
    destroyed(){
        console.log('El objeto Vue ha sido destruido');
    },
    methods:{
        destruir(){
            this.$destroy();

        }
    }

})