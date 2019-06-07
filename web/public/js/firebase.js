//Este archivo define los procedimientos para añadir un libro a la base de datos

//En el caso de que no esté cargada carga el firebase
if (!firebase.apps.length) {
	var config = {
		apiKey: "AIzaSyBbG13io76qPTfHvZRn_Vw4BWjB8s4K2eI",
		authDomain: "club-de-lectura-cb6d5.firebaseapp.com",
		databaseURL: "https://club-de-lectura-cb6d5.firebaseio.com",
		projectId: "club-de-lectura-cb6d5",
		storageBucket: "club-de-lectura-cb6d5.appspot.com",
		messagingSenderId: "175720945121"
	};
	firebase.initializeApp(config);
}

//Accede a la base de datos de los libros
var book = firebase.database().ref("BOOKS");


function validar() {

	var error = 0;
	var valor = document.getElementById("isbn").value.length;
	var titulo = document.getElementById("title").value.length;
	document.getElementById("errores").innerHTML = "";

	if (titulo === 0) {
		document.getElementById("errores").innerHTML += "<p>Rellene el campo del título.</p>";
		error = 1;
	}
	if (valor !== 13) {
		document.getElementById("errores").innerHTML += "<p>El campo ISBN debe contener 13 dígitos.</p>";
		error = 1;
	}
	if (error == 0) {

		var title = $("#title").val();
		var category = $("#category").val();
		var autor = $("#author").val();
		var isbn = $("#isbn").val();
		book.child($("#isbn").val()).set({
			title: title,
			category: category,
			author: autor,
			isbn: isbn
		})
		document.getElementById("errores").innerHTML += "<p>Añadido correctamente.\n\nTítulo: " + title + "\nAutor: " + autor + "\nCategoría: " + category + "\nISBN: " + isbn + "\n</p>";
		document.getElementById("formulario").reset();

	}
}
//A la hora de introducir un libro comprueba que los datos sean correctos
document.getElementById("btn").addEventListener("click", validar);
