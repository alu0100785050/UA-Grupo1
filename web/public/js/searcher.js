var hola = document.getElementById('search2');
hola.addEventListener('keyup', function (event) {
  //  if (document.getElementById('search').value.length > 0) {
    if(event.keyCode === 13){
    	event.preventDefault();
    	document.getElementById("myBtn2").click();
    }

    //}
});

var hola2 = document.getElementById('search2');

hola2.addEventListener("click", function () {

	window.location.href='mislibros.html'

}); 

/*function myFunction() {


	window.location.href='mislibros.html'

}
*/