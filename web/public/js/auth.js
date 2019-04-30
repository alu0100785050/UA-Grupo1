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
    firebase.auth().createUserWithEmailAndPassword($("#scorreo").val(),$("#spassword").val()).catch(function(error){
        alert(error);
    });
    firebase.auth().singInWithEmailAndPassword($("#scorreo").val(),$("#spassword").val());
    var current = firebase.auth().currentUser;

    var username = $("#susername").val();
    current.updateProfile({
        displayName: username, 
      }).then(function() {
        alert("correct")
      }).catch(function(error) {
        alert("bad luck")
      });
      
    // user.child(firebase.auth().uid().set({
    //     username: username
    // }));
});
document.getElementById("login").addEventListener("click",function(){
    firebase.auth().singInWithEmailAndPassword($("#lcorreo").val(),$("#lpassword").val()).catch(function(error){
        alert(error);
    });
});
