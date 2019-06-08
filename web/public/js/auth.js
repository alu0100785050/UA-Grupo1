
//En el caso de que Firebase no haya sido cargado se enlaza
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

//RESALTAR EN MENÚ LINK ACTIVO (Señala pestaña actual)
var contain = document.getElementById("nav-mobile");
var btns = contain.getElementsByClassName("act");

for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function () {
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	});
}


//Carga de manera dinámica los menús de navegación
var current = firebase.auth().currentUser;
window.addEventListener('load', function () {
	firebase.auth().onAuthStateChanged(function (user) {
		console.log('auth')
		if (document.getElementById("userstate")) {
			if (user) {
				document.getElementById("userstate").innerHTML = '<li class="act"><a id="logout" href="logout.html">Cerrar sesión</a></li>';
				document.getElementById("nav-mobile").insertAdjacentHTML('beforeend','<li class="act"><a href="mislibros.html">Mis libros</a></li>');
			} else if (!user) {
				document.getElementById("userstate").innerHTML = '<li class="act"><a href="login.html">Iniciar sesión</a></li><li class=" act right"><a href="signin.html">Registrarse</a></li>';
			}
		}
		if (document.getElementById("mobile-demo")) {
			if (user) {
				//document.getElementById("mislibros").innerHTML = '<a href="mislibros.html">Mis libros</a>';
				document.getElementById("mobile-demo").insertAdjacentHTML('beforeend', '<li class="act"><a href="mislibros.html">Mis libros</a></li><li class="act"><a id="logout" href="logout.html">Cerrar sesión</a></li>');
			} else {
				document.getElementById("mobile-demo").insertAdjacentHTML('beforeend', '<li class="act"><a href="login.html">Iniciar sesión</a></li><li class="act"><a href="signin.html">Registrarse</a></li>')
			}
		}
	})
});


//Validador de formularios
function validsign() {

	let emailregex = /^[-\w.%+]{1,64}@gmail.{1,125}[A-Z]{2,63}$/i;
	let error = 0;
	let correo = document.getElementById("scorreo").value;
	let pass1val = document.getElementById("spassword").value;
	let pass2val = document.getElementById("srep-password").value;
	document.getElementById("errores").innerHTML = "";

	if (!emailregex.test(correo)) {
		document.getElementById("errores").innerHTML += "<p>Introduzca un correo electrónico gmail válido.</p>";
		error = 1;
	}
	if (pass1val.length === 0) {
		document.getElementById("errores").innerHTML += "<p>Rellene el campo de la contraseña.</p>";
		error = 1;
	}
	if (pass1val !== pass2val) {
		document.getElementById("errores").innerHTML += "<p>La contraseña y repetir contraseña deben coincidir.</p>";
		error = 1;
	}
	document.getElementById("errores").style.color = "red";
	if (error == 0) {
		var promesa = new Promise(function (resolve, reject) {
			firebase.auth().createUserWithEmailAndPassword($("#scorreo").val(), $("#spassword").val())
				.then(function () {
					current = firebase.auth().currentUser;
					if (current) {
						var username = $("#susername").val();
						current.updateProfile({
							displayName: username,
							liked:[],
						}).then(function () {
							location.href = "index.html";
						}).catch(function (error) {
							alert("Error al poner el nombre de usuario")
						});
					} else {
						alert("usuario no registrado")
					}
				})
				.catch(function (error) {
					alert(error);
				});
		})
		setTimeout(function () {
			vaciar();
		}, 0);
		document.getElementById("errores").innerHTML += "<p>Registrado correctamente.</p>";
	}
}
//Si se encuentra en la pagina de registro y se pulsa para registrar se valida la información insertada
if (document.getElementById("register"))
	document.getElementById("register").addEventListener("click", validsign);





//Función de comprobación de datos para el login
function validlogin() {

	let emailregex = /^[-\w.%+]{1,64}@gmail.{1,125}[A-Z]{2,63}$/i;
	let error = 0;
	let correo = document.getElementById("lcorreo").value;
	let pass = document.getElementById("lpassword").value;
	document.getElementById("errores").innerHTML = "";

	if (!emailregex.test(correo)) {
		document.getElementById("errores").innerHTML += "<p>Introduzca un correo electrónico gmail válido.</p>";
		error = 1;
	}
	if (pass.length === 0) {
		document.getElementById("errores").innerHTML += "<p>Rellene el campo de la contraseña.</p>";
		error = 1;
	}
	document.getElementById("errores").style.color = "red";
	if (error == 0) {
		firebase.auth().signInWithEmailAndPassword($("#lcorreo").val(), $("#lpassword").val())
			.then(function () {
				var current = firebase.auth().currentUser;
				if (current) {
					location.href = "index.html";
				} else {
					alert("usuario no logueado")
				}
			})
			.catch(function (error) {
				alert(error);
			});
	}
}
//En el caso de que se cargue el login y se pulse click para loggearse se comprueban los datos antes de enviarlos al firebase
if (document.getElementById("llogin"))
	document.getElementById("llogin").addEventListener("click", validlogin);

window.addEventListener('load', function () {
	firebase.auth().onAuthStateChanged(function (user) {
		if (document.getElementById("logout"))
			document.getElementById("logout").addEventListener("click", function () {
				firebase.auth().signOut().then(function () {
					location.href = "logout.html";
				}).catch(function (error) {
					alert("cannot logout")
				});
			});
	})
});
//Se vacía la página de registro del login
function vaciar() {
	document.getElementById("login").reset();
}

