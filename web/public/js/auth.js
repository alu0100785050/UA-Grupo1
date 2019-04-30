var config = {
    apiKey: "AIzaSyBbG13io76qPTfHvZRn_Vw4BWjB8s4K2eI",
    authDomain: "club-de-lectura-cb6d5.firebaseapp.com",
    databaseURL: "https://club-de-lectura-cb6d5.firebaseio.com",
    projectId: "club-de-lectura-cb6d5",
    storageBucket: "club-de-lectura-cb6d5.appspot.com",
    messagingSenderId: "175720945121"
  };
firebase.initializeApp(config);

document.getElementById("register").addEventListener("click",function(){
    var user = firebase.database().ref("USERS");
    alert($("#scorreo").val())
    firebase.auth().createUserWithEmailAndPassword($("#scorreo").val(),$("#spassword").val()).catch(function(error){
        alert(error);
    });
});
document.getElementById("login").addEventListener("click",function(){
    firebase.auth().singInWithEmailAndPassword($("#correo").val(),$("#password").val()).catch(function(error){
        alert(error);
    });
});
