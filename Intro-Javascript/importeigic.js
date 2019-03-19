function igic(){

    var productos={gtx:500,micro:700,placabase:100,ventilador:25,carcasa:55}
    var igic=0.065;
	var total=0;
    
    for each(var item in productos){
    total+=(item * igic + item);
	}

}
