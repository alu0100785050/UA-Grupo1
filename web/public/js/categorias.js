//Trae la base de datos
var book = firebase.database();
var links = firebase.storage().ref().child('pictures');

function insertar(childData, enlace) {
    $('#resultados').append(

        `<div class="col m2" > 
        <div class="card"   aria-expanded=false>
          <div class="card-image waves-effect waves-block waves-light" >
            <img class="activator" src="`+ enlace + `" alt="` + childData.title + `" tabindex=0>
          </div>
          <div class="card-reveal"  >
            <span class="card-title grey-text text-darken-4"><i class="material-icons right" tabindex=0>close</i></span>
            <br><br>
            <p> <b>Título:</b><br/> `+ childData.title + ` </p> ` + `
            <p> <b>Categoría:</b><br/> `+ childData.category + ` </p> ` + `
            <p> <b>Autor:</b><br/> `+ childData.author + ` </p> ` + `
            <p class="identifier"> <b>ISBN:</b><br/> `+ childData.isbn + ` </p> ` + `
          </div>
        </div>
      </div> 
      `
    );
}
function busqueda() {
    document.getElementById("resultados").innerHTML = "";
    if ($("#category").val() == "Todos") {
        book.ref('BOOKS').once('value').then(function (snapshot) {
            if (snapshot.exists()) {
                var cargados = 0;
                new Promise((resolve, reject) => {
                    snapshot.forEach(function (data) {
                        var childData = data.val();
                        var urldl = '';
                        var peticion = links.child(`${childData.isbn}.jpg`).getDownloadURL()
                            .then(function (url) {
                                urldl = url;
                                insertar(childData, urldl);
                                cargados = cargados + 1;
                                if (cargados >= snapshot.numChildren()) {
                                    resolve();
                                }
                            })
                            .catch(function (url) {
                                links.child(`0000000000000.jpg`).getDownloadURL().then(function (urll) {
                                    urldl = urll;
                                    insertar(childData, urldl)
                                    cargados = cargados + 1;
                                    if (cargados >= snapshot.numChildren()) {
                                        resolve();
                                    }
                                }).catch((err) => {
                                    console.log(err);
                                })
                            })
                    });
                }).then(() => {
                    //Permite que se abra la tarjeta con un enter
                    var input = document.getElementsByClassName("activator");
                    for (let i = 0; i < input.length; i++) {
                        input[i].addEventListener('keypress', function (e) {
                            if (e.code == "Enter") {
                                $(this).click();
                            }
                        });
                    }
                    //permite que se cierre la tarjerta con un enter
                    input = document.getElementsByClassName("material-icons");
                    for (let i = 0; i < input.length; i++) {
                        input[i].addEventListener('keypress', function (e) {
                            if (e.code == "Enter") {
                                $(this).click();
                            }
                        });

                    }
                    //Cambia el estado-aria de la tarjeta cada vez que se revela el contenido
                    input = document.getElementsByClassName("card");
                    for (let i = 0; i < input.length; i++) {
                        input[i].addEventListener('click', function (e) {
                            var x = $(this).attr("aria-expanded")
                            if (x == "false") {
                                x = "true"
                            } else {
                                x = "false";
                            }
                            $(this).attr("aria-expanded", x)
                        });
                    }

                    var user = firebase.auth().currentUser
                    if (user) {
                        input = document.getElementsByClassName("card-reveal");
                        for (let i = 0; i < input.length; i++) {
                            input[i].insertAdjacentHTML('beforeend', '<a class="btn-floating btn-large waves-effect waves-light red add"><i class="material-icons">add</i></a>')
                        }
                    } 
                    if (user) {
                        input = document.getElementsByClassName("add");
                        for (let i = 0; i < input.length; i++) {
                            input[i].addEventListener('click', function (event) {
                                var isbn = $(event.currentTarget).parent().find(".identifier").text()
                                isbn = isbn.replace(/[^0-9]/g, "")
                                //Insertar en la nueva base de datos
                                var none = book.ref(`USERS/${user.uid}`).once('value').then(function (my) {
                                    if (my.exists()) {
                                        book.ref(`USERS/${user.uid}/liked`).child(isbn).set({
                                            isbn: isbn
                                        })
                                    } else {
                                        book.ref(`USERS`).child(user.uid).set({
                                            liked: null,
                                            username: user.username || "anonymus",
                                        }).then(() => {
                                            book.ref(`USERS/${user.uid}/liked`).child(isbn).set({
                                                isbn: isbn,
                                            })
                                        })
                                    }
                                });
                            })
                        }
                    }
                })
            }
        });
    } else {
        book.ref('BOOKS').orderByChild("category").equalTo($("#category").val()).once('value').then(function (snapshot) {
            if (snapshot.exists()) {
                var cargados = 0;
                new Promise((resolve, reject) => {
                    snapshot.forEach(function (data) {
                        var childData = data.val();
                        var urldl = '';
                        var peticion = links.child(`${childData.isbn}.jpg`).getDownloadURL()
                            .then(function (url) {
                                urldl = url;
                                insertar(childData, urldl);
                                cargados = cargados + 1;
                                if (cargados >= snapshot.numChildren()) {
                                    resolve();
                                }
                            })
                            .catch(function (url) {
                                links.child(`0000000000000.jpg`).getDownloadURL().then(function (urll) {
                                    urldl = urll;
                                    insertar(childData, urldl)
                                    cargados = cargados + 1;
                                    if (cargados >= snapshot.numChildren()) {
                                        resolve();
                                    }
                                }).catch((err) => {
                                    console.log(err);
                                })
                            })
                    });
                }).then(() => {
                    //Permite que se abra la tarjeta con un enter
                    var input = document.getElementsByClassName("activator");
                    for (let i = 0; i < input.length; i++) {
                        input[i].addEventListener('keypress', function (e) {
                            if (e.code == "Enter") {
                                $(this).click();
                            }
                        });
                    }
                    //permite que se cierre la tarjerta con un enter
                    input = document.getElementsByClassName("material-icons");
                    for (let i = 0; i < input.length; i++) {
                        input[i].addEventListener('keypress', function (e) {
                            if (e.code == "Enter") {
                                $(this).click();
                            }
                        });

                    }
                    //Cambia el estado-aria de la tarjeta cada vez que se revela el contenido
                    input = document.getElementsByClassName("card");
                    for (let i = 0; i < input.length; i++) {
                        input[i].addEventListener('click', function (e) {
                            var x = $(this).attr("aria-expanded")
                            if (x == "false") {
                                x = "true"
                            } else {
                                x = "false";
                            }
                            $(this).attr("aria-expanded", x)
                        });
                    }

                    var user = firebase.auth().currentUser
                    if (user) {
                        input = document.getElementsByClassName("card-reveal");
                        for (let i = 0; i < input.length; i++) {
                            input[i].insertAdjacentHTML('beforeend', '<a class="btn-floating btn-large waves-effect waves-light red add"><i class="material-icons">add</i></a>')
                        }
                    } 

                    if (user) {
                        input = document.getElementsByClassName("add");
                        for (let i = 0; i < input.length; i++) {
                            input[i].addEventListener('click', function (event) {
                                var isbn = $(event.currentTarget).parent().find(".identifier").text()
                                isbn = isbn.replace(/[^0-9]/g, "")
                                //Insertar en la nueva base de datos
                                var none = book.ref(`USERS/${user.uid}`).once('value').then(function (my) {
                                    if (my.exists()) {
                                        book.ref(`USERS/${user.uid}/liked`).child(isbn).set({
                                            isbn: isbn
                                        })
                                    } else {
                                        book.ref(`USERS`).child(user.uid).set({
                                            liked: null,
                                            username: user.username || "anonymus",
                                        }).then(() => {
                                            book.ref(`USERS/${user.uid}/liked`).child(isbn).set({
                                                isbn: isbn,
                                            })
                                        })
                                    }
                                });
                            })
                        }
                    }
                })
            } else {
                $("#resultados").append(`No hay libros de esta categoría todavía`)
            }
        });
    }
}
document.getElementById("submit").addEventListener('click', busqueda);
