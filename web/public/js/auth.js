var config = {
    apiKey: "AIzaSyBbG13io76qPTfHvZRn_Vw4BWjB8s4K2eI",
    authDomain: "club-de-lectura-cb6d5.firebaseapp.com",
    databaseURL: "https://club-de-lectura-cb6d5.firebaseio.com",
    projectId: "club-de-lectura-cb6d5",
    storageBucket: "club-de-lectura-cb6d5.appspot.com",
    messagingSenderId: "175720945121"
  };
firebase.initializeApp(config);

firebase.auth().createUserWithEmailAndPassword($("#email").val(),$("#password").val()).catch(function(error){
    alert(error);
});
firebase.auth().singInWithEmailAndPassword($("#email").val(),$("#password").val()).catch(function(error){
    alert(error);
});
