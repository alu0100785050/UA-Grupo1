
  var config = {
    apiKey: "AIzaSyBbG13io76qPTfHvZRn_Vw4BWjB8s4K2eI",
    authDomain: "club-de-lectura-cb6d5.firebaseapp.com",
    databaseURL: "https://club-de-lectura-cb6d5.firebaseio.com",
    projectId: "club-de-lectura-cb6d5",
    storageBucket: "club-de-lectura-cb6d5.appspot.com",
    messagingSenderId: "175720945121"
  };
  firebase.initializeApp(config);
  

var current = firebase.auth().currentUser;

console.log(current)
if(!current){
  document.getElementById("userstate").innerHTML= '<li><a href="login.html">Log in</a></li><li class="right"><a href="signin.html">Sing in</a></li>';
}else{
  document.getElementById("userstate").innerHTML='<li><a href="logout.html">Log out</a></li>';
}


if(document.getElementById("register"))
document.getElementById("register").addEventListener("click",function(){
    
    var promesa = new Promise(function(resolve,reject){
      firebase.auth().createUserWithEmailAndPassword($("#scorreo").val(),$("#spassword").val())
      .then(function(){
        current = firebase.auth().currentUser;
        if(current){
          alert("Usuario registrado");
          var username = $("#susername").val();
          current.updateProfile({
              displayName: username, 
            }).then(function() {
               location.reload();
            }).catch(function(error) {
              alert("Error al poner el nombre de usuario")
            });
        }else{
          alert("usuario no registrado")
        }
      })
      .catch(function(error){
         alert(error);});
      })

});

if(document.getElementById("llogin"))
document.getElementById("llogin").addEventListener("click",function(){
    firebase.auth().signInWithEmailAndPassword($("#lcorreo").val(),$("#lpassword").val())
    .then(function(){
      var current = firebase.auth().currentUser;
      if(current){
        alert("Usuario logeado");
        location.href="index.html";
      }else{
        alert("usuario no logueado")
      }
    })
    .catch(function(error){
        alert(error);
    });
 });
