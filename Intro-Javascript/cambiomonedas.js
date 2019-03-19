 function cambio(){
    var cambio={apeso:27.68,aeuro:0.88,alibra:0.75};
    var dolar=3;
    var peso=dolar*cambio['apeso'];
    var euro=dolar*cambio['aeuro'];
    var libra=dolar*cambio['alibra'];
    console.log("Cantidad de dolares a cambiar: " +dolar);
    console.log("Cantidad en pesos: "+ peso);
    console.log("Cantidad en euros: "+euro);
    console.log("Cantidad en libras: "+ libra);
}
cambio();