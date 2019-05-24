var config = {
  apiKey: "AIzaSyBbG13io76qPTfHvZRn_Vw4BWjB8s4K2eI",
  authDomain: "club-de-lectura-cb6d5.firebaseapp.com",
  databaseURL: "https://club-de-lectura-cb6d5.firebaseio.com",
  projectId: "club-de-lectura-cb6d5",
  storageBucket: "club-de-lectura-cb6d5.appspot.com",
  messagingSenderId: "175720945121"
};
if (!firebase.apps.length) {
	console.log('done')
	firebase.initializeApp(config);
}


/*firebase.auth().onAuthStateChanged(function(user){
	if (user) {
	  document.getElementById("userstate").innerHTML='<li><a id="logout" href="logout.html">Log out</a></li>';
	} else {
	  document.getElementById("userstate").innerHTML= '<li><a href="login.html">Log in</a></li><li class="right"><a href="signin.html">Sing in</a></li>';
	}
  });*/
var book = firebase.database().ref("BOOKS");

function validar(){
	
  var error=0;
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
		
		var title = $("#title").val();
		var category = $("#category").val();
		var autor= $("#author").val();
		var isbn = $("#isbn").val(); 
		book.child($("#isbn").val()).set({
			title: title,
			category: category,
			author: autor,
			isbn: isbn
		})
		document.getElementById("errores").innerHTML+="<p>Añadido correctamente.\n\nTítulo: "+title+"\nAutor: "+autor+"\nCategoría: "+category+"\nISBN: "+isbn+"\n</p>";
		document.getElementById("formulario").reset();
		
	}
}

document.getElementById("btn").addEventListener("click",validar);
