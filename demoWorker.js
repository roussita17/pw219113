var i=0;
function cuenta(){
	i = i + 1;
	//Envia respuesta al Worker que lo mando llamar
	postMessage(i);
	//Ejecutamos cuenta() cada 500 milisegundos (recursivo)
	setTimeout("cuenta()",500);
}

cuenta();