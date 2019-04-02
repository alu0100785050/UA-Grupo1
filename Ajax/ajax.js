	$("#boton").click(function(e){
		$.ajax({
			url:`https://jsonplaceholder.typicode.com/comments?postId=${$("#valor").val()}`,
			type: "get",
			dataType: "json",
			headers: {'Access-Control-Allow-Origin': '*'},
			async: true,
			
			success: function(result){
				alert("ok");
				
				for(let i=0;i<result.length;i++){
					$('#exito').append(` name : ${result[i].name} email: ${result[i].email}<br><br>`);
				}
			},
			error: function(...result){
				alert('bad')	;
				}	
		})
	});	



