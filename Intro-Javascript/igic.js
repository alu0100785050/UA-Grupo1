
var precios={1:0,2:0,3:0,4:0};

function igicm(ValNum,i){

	precios[i]=ValNum;
    let valigic=0.065;
	var total=0;
	
	for(var item in precios){
		total+=(precios[item]*valigic)+ parseInt(precios[item],10);
		console.log(precios[item]);
	}
	document.getElementById("igic").innerHTML=total;
	
}