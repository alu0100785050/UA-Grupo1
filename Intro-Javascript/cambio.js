 function cambiom(ValNum){
    var cambio={apeso:27.68,aeuro:0.88,alibra:0.75};
    var peso=ValNum*cambio['apeso'];
    var euro=ValNum*cambio['aeuro'];
    var libra=ValNum*cambio['alibra'];
	document.getElementById("e").innerHTML=euro;
	document.getElementById("p").innerHTML=peso;
	document.getElementById("l").innerHTML=libra;
}