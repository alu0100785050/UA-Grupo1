
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


var book = firebase.database();
var a = 1;
var b = 2;

book.ref('BOOKS').once('value', function (snapshot) {
  if (snapshot.exists()) {
    snapshot.forEach(function (data) {
      var childData = data.val();

      $('#information').append(

        `<div class="col m2" > 
          <div class="card"   aria-expanded=false>
            <div class="card-image waves-effect waves-block waves-light" >
              <img class="activator" src="pictures/`+ b + `.jpg" alt="` + childData.title + `" tabindex=0>
            </div>
            <div class="card-reveal"  >
              <span class="card-title grey-text text-darken-4"><i class="material-icons right" tabindex=0>close</i></span>
              <br><br>
              <p> <b>Título:</b><br/> `+ childData.title + ` </p> ` + `
              <p> <b>Categoría:</b><br/> `+ childData.category + ` </p> ` + `
              <p> <b>Autor:</b><br/> `+ childData.author + ` </p> ` + `
              <p> <b>ISBN:</b><br/> `+ childData.isbn + ` </p> ` + `
            </div>
          </div>
        </div> 
        `

      );
      b++;
    });
  }
  var input = document.getElementsByClassName("activator");
  for (let i = 0; i < input.length; i++) {
    input[i].addEventListener('keypress', function (e) {
      if (e.code == "Enter") {
        $(this).click();
      }
    });
  }
  input = document.getElementsByClassName("material-icons");
  for (let i = 0; i < input.length; i++) {
    input[i].addEventListener('keypress', function (e) {
      if (e.code == "Enter") {
        $(this).click();
      }
    });

  }
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
});


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