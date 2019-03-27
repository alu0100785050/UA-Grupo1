function igicm(ValNum){

    let valigic=0.065;
	let total=valigic*ValNum+parseInt(ValNum,10);
	document.getElementById("igic").innerHTML=total;
	
}