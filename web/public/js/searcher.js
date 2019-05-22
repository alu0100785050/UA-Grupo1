
if(document.getElementById("se") != null){
 document.getElementById("se").addEventListener("keyup", function (event) {
    if (document.getElementById('se').value.length > 0) {

    	event.preventDefault();
	    if(event.keyCode == 13){
	    	
	 		window.location.href='mislibros.html'

	    }

    }
})};


if(document.getElementById("myBtn2") != null){
document.getElementById("myBtn2").addEventListener("click", function () {
    if (document.getElementById("myBtn2").value.length > 0) {

		window.location.href='mislibros.html'
	}

})}; 


