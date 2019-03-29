	$("#boton").click(function(e){
		$.ajax({
			url:'https://jsonplaceholder.typicode.com/comments?postId=1',
			type: "get",
			dataType: "json",
			headers: {'Access-Control-Allow-Origin': '*'},
			async: true,
			data: 'parametro1=valor1&parametro2=valor2',
			success: function(result){
				alert("ok");
				
				for(let i=0;i<result.length;i++){
					let st= JSON.stringify(result[i])
					$('#exito').append(`${st}<br>`);
				}
			},
			error: function(...result){
				alert('bad')	;
				}	
		})
	});	



