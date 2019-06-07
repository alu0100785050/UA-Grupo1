
//En el caso de que no se haya cargado el firebase lo carga
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
//Trae la base de datos
var book = firebase.database();
var links = firebase.storage().ref().child('pictures');
var a = 1;

function insertar(childData, enlace) {
  $('#information').append(

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
book.ref('BOOKS').limitToFirst(10).once('value').then(function (snapshot) {
  if (snapshot.exists()) {
    var cargados = 0;
    var cuenta = 0;
    new Promise((resolve, reject) => {
      snapshot.forEach(function (data) {
        // cuenta=cuenta+1;
        // if(cuenta==11){
        //   return true;
        // }
        var childData = data.val();
        var urldl = '';
        var peticion = links.child(`${childData.isbn}.jpg`).getDownloadURL()
          .then(function (url) {
            urldl = url;
            insertar(childData, urldl);
            cargados = cargados + 1;
            if (cargados >= 10) {
              resolve();
            }
          })
          .catch(function (url) {
            links.child(`0000000000000.jpg`).getDownloadURL().then(function (urll) {
              urldl = urll;
              insertar(childData, urldl)
              cargados = cargados + 1;
              if (cargados >= 10) {
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
      } else {
        console.log('nop')
      }

      if (user) {
        console.log('entra')
        input = document.getElementsByClassName("add");
        for (let i = 0; i < input.length; i++) {
          input[i].addEventListener('click', function (event) {
            console.log(user)
            var isbn= $(event.currentTarget).parent().find(".identifier").text()
            isbn = isbn.replace(/[^0-9]/g,"")
            user.updateProfile(liked.push(isbn)).then(()=>{
              console.log(user)
            });
          })
        }
      }
    })
  }



});


//Ejecutar en fichero aparte
book.ref('BOOKS').once('value', function (snapshot) {
  if (snapshot.exists()) {
    snapshot.forEach(function (data) {
      var datos = data.val();
      $('#libros').append(
        `
					<tr>
					  <th id="tit">`+ datos.title + `</th>
					  <th id="cat">`+ datos.category + `</th>
					  <th id="aut">`+ datos.author + `</th>
					  <th id="isb">`+ datos.isbn + `</th>
					</tr>
				`
      );
    })
  };
});