var config = {
  apiKey: "AIzaSyBbG13io76qPTfHvZRn_Vw4BWjB8s4K2eI",
  authDomain: "club-de-lectura-cb6d5.firebaseapp.com",
  databaseURL: "https://club-de-lectura-cb6d5.firebaseio.com",
  projectId: "club-de-lectura-cb6d5",
  storageBucket: "club-de-lectura-cb6d5.appspot.com",
  messagingSenderId: "175720945121"
};
firebase.initializeApp(config);

var book = firebase.database();

book.ref("BOOKS").once('value', function(snapshot){
    if(snapshot.exists()){
        snapshot.forEach(function(data){
	      var childData = data.val();

	      console.log(childData.title);

	      $('#information').append('<p>' + childData.title + '</p>');
    	});
    }
});