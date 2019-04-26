function validar(){
	
	let error=0;
	var valor = document.getElementById("isbn").value.length;
	var titulo = document.getElementById("title").value.length;
	document.getElementById("errores").innerHTML="";
	
	if(titulo===0){
		document.getElementById("errores").innerHTML+="<p>Rellene el campo del título.</p>";
		error=1;
	}
	if(valor!==13){
		document.getElementById("errores").innerHTML+="<p>El campo ISBN debe contener 13 dígitos.</p>";
		error=1;
	}
	if(error==0){
		//GUARDAR EN LA BASE DE DATOS
	}
}

document.getElementById("btn").addEventListener("click",validar);