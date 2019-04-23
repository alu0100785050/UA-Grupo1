var config = {
  apiKey: "AIzaSyBbG13io76qPTfHvZRn_Vw4BWjB8s4K2eI",
  authDomain: "club-de-lectura-cb6d5.firebaseapp.com",
  databaseURL: "https://club-de-lectura-cb6d5.firebaseio.com",
  projectId: "club-de-lectura-cb6d5",
  storageBucket: "club-de-lectura-cb6d5.appspot.com",
  messagingSenderId: "175720945121"
};
firebase.initializeApp(config);


var book = firebase.database().ref("BOOKS");
var nbook = function(){
  
  var title = $("#title").val();
  var category = $("#category").val();
  var autor= $("#author").val();
  var isbn = $("#isbn").val(); 
  book.set({
    title: title,
    category: category,
    author: autor,
    isbn: isbn
  })

}


$(window).load(function () {
  $("#formulario").submit(nbook);

});