function validsign(){
	
	let emailregex=/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
	let error=0;
	let correo=document.getElementById("scorreo").value;
	let usern=document.getElementById("susername").value.length;
	let pass1val=document.getElementById("spassword").value;
	let pass2val=document.getElementById("srep-password").value;
	document.getElementById("errores").innerHTML="";
	
	if(!emailregex.test(correo)){
		document.getElementById("errores").innerHTML+="<p>Introduzca un correo electrónico válido.</p>";
		error=1;
	}
	if(usern===0){
		document.getElementById("errores").innerHTML+="<p>Rellene el campo del nombre de usuario.</p>";
		error=1;
	}
	if(pass1val.length===0){
		document.getElementById("errores").innerHTML+="<p>Rellene el campo de la contraseña.</p>";
		error=1;
	}
	if(pass1val!==pass2val){
		document.getElementById("errores").innerHTML+="<p>La contraseña y repetir contraseña deben coincidir.</p>";
		error=1;
	}
	if(error==0){
		alert("good");
		setTimeout(function(){
			vaciar();
		},0);
	}
}

function vaciar(){
	
	document.getElementById("login").reset();
}

document.getElementById("register").addEventListener("click",validsign);