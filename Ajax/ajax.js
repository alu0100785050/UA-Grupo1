	$("#formulario").submit(function(){
		$.ajax({
			url:'https://jsonplaceholder.typicode.com/comments?postId=1',
			type: GET,
			async: true,
			data: 'parametro1=valor1&parametro2=valor2'.
			success: function(result){
				if(result == 1){
					$("#exito").load();
				}
				else {
					$("#fracaso").load();
				}	
		}})
		.done(function(respuesta){
			var res = $.parseJSON(respuesta);
			console.log(resultado);

		.fail(function() {
			console.log("error");
		})
		});
	});	



