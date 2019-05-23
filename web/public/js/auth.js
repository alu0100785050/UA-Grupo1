
var config = {
	apiKey: "AIzaSyBbG13io76qPTfHvZRn_Vw4BWjB8s4K2eI",
	authDomain: "club-de-lectura-cb6d5.firebaseapp.com",
	databaseURL: "https://club-de-lectura-cb6d5.firebaseio.com",
	projectId: "club-de-lectura-cb6d5",
	storageBucket: "club-de-lectura-cb6d5.appspot.com",
	messagingSenderId: "175720945121"
};
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}


var current = firebase.auth().currentUser;
 
   setTimeout(firebase.auth().onAuthStateChanged(function (user) {
	   console.log('auth')
		if (document.getElementById("userstate")) {
			if (user) {
				document.getElementById("userstate").innerHTML = '<li><a id="logout" href="logout.html">Log out</a></li>';
			} else {
				document.getElementById("userstate").innerHTML = '<li><a href="login.html">Log in</a></li><li class="right"><a href="signin.html">Sing in</a></li>';
			}
		}
		if (document.getElementById("mobile-demo")) {
			if (user) {
				document.getElementById("mobile-demo").insertAdjacentHTML('beforeend', '<li><a id="logout" href="logout.html">Log out</a></li>');
			} else {
				document.getElementById("mobile-demo").insertAdjacentHTML('beforeend', '<li><a href="login.html">Log in</a></li><li><a href="signin.html">Sing in</a></li>')
			}
		}
	}),1000);
  


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
	if (pass1val.length < 6) {
		document.getElementById("errores").innerHTML += "<p>La contraseña debe tener al menos 6 caracteres.</p>";
		error = 1;
	}
	if (pass1val !== pass2val) {
		document.getElementById("errores").innerHTML += "<p>La contraseña y repetir contraseña deben coincidir.</p>";
		error = 1;
	}
	if (error == 0) {
		var promesa = new Promise(function (resolve, reject) {
			firebase.auth().createUserWithEmailAndPassword($("#scorreo").val(), $("#spassword").val())
				.then(function () {
					current = firebase.auth().currentUser;
					if (current) {
						var username = $("#susername").val();
						current.updateProfile({
							displayName: username,
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

if (document.getElementById("register"))
	document.getElementById("register").addEventListener("click", validsign);

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

if (document.getElementById("llogin"))
	document.getElementById("llogin").addEventListener("click", validlogin);

firebase.auth().onAuthStateChanged(function (user) {
	if (document.getElementById("logout"))
		document.getElementById("logout").addEventListener("click", function () {
			firebase.auth().signOut().then(function () {
				location.href = "logout.html";
				console.log(current);
			}).catch(function (error) {
				alert("cannot logout")
			});
		});
});

function vaciar() {
	document.getElementById("login").reset();
}
