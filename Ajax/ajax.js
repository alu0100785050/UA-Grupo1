	$("#boton").click(function(e){
		$.ajax({
			url:'https://jsonplaceholder.typicode.com/comments?postId=1',
			type: "get",
			dataType: "jsonp",
			headers: {'Access-Control-Allow-Origin': '*'},
			async: true,
			data: 'parametro1=valor1&parametro2=valor2',
			success: function(result){
				alert("ok");
				$('#exito').append(`<p>${result}</p>`);
				},
			error: function(result){
				alert('bad')	;
				$("#fracaso").load();

				}	
		})
	});	



