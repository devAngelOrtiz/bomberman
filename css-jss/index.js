function iniciarsesion()
{
	$("#contenido").html("<p class='login-text'>Iniciar Sesión</p>"+
							"<div id='error'></div>"+
							"<form id ='login' onsubmit='return verifica();'>"+
								"<table class='login-table'>"+
								   	"<tr>"+
								    	"<td>"+
								   			"<img class='login-ico' src='img/l_usuario.png'/>"+
										"</td>"+
								    	"<td>"+
								      		"<input class='entrada-texto' name='usuario' id='usuario' type='text' placeholder='Usuario' autofocus required />"+
								    	"</td>"+
							   		"</tr>"+
							   		"<tr>"+
								    	"<td>"+
								   			"<img class='login-ico' src='img/l_password.png'/>"+
										"</td>"+
								    	"<td>"+
								      		"<input class='entrada-texto' name='contra' id='contra' type='password' placeholder='Contraseña'required />"+
								    	"</td>"+
							   		"</tr>"+
						   		"</table>"+
								"<input name='submit' type='submit' id='boton' value='Iniciar' class='boton' />"+
								"<div class='registrar'><a href='' onclick='return formregistro()'>Registrar</a></div>"+
							"</form>");
    	return false;
}

function verifica()
{
		var datos= {
			"usuario" : $('#usuario').val(),
			"contra" : $('#contra').val(),
		};

		$.ajax({
			data:  datos,
	    	url:   'css-jss/index.php',
	        type:  'post',
	        beforeSend: function () {
           		$('#boton').attr("disabled", true);
           		$('#boton').css("background", "#808080");
	        },
	        success:  function (response) {
	        	$('#boton').attr("disabled", false);
           		$('#boton').css("background", "#3498DB");
           		if(response=="true")
	            	location.href = "juego.php";
	            else
	            	$("#error").html("<center><span class='texterror'>"+response+"</span></center>");
	            	setInterval(function(){$("#error").html("");},5000);
	        }
	    });
        return false;
}

function formregistro()
{
	$("#contenido").html("<p class='login-text'>Resgistro</p>"+
    							"<form id ='login' onSubmit='return registro();'> "+
									"<table class='login-table'>"+
									   	"<tr>"+
									    	"<td>"+
									   			"<span class='text'>Nombre:</span>"+
											"</td>"+
									    	"<td>"+
									      		"<input class='entrada-texto' id='name' type='text' placeholder='Nombre' autofocus required />"+
									    	"</td>"+
								   		"</tr>"+
								   		"<tr>"+
									    	"<td>"+
									   			"<span class='text'>Usuario:</span>"+
											"</td>"+
									    	"<td>"+
									      		"<input class='entrada-texto'id='user' type='text' placeholder='Usuario'required />"+
									    	"</td>"+
								   		"</tr>"+
								   		"<tr>"+
									    	"<td>"+
									   			"<span>Contraseña:</span>"+
											"</td>"+
									    	"<td>"+
									      		"<input class='entrada-texto' id='pass' type='password' placeholder='Contraseña'required />"+
									    	"</td>"+
								   		"</tr>"+
							   		"</table>"+
									"<center><input type='submit' id='aceptar' value='Registrar' class='aceptar' />"+
									"<input type='button' onclick='return iniciarsesion();' value='Cancelar' class='cancelar' /></center>"+
								"</form>");
	return false;
}

function registro()
{
	var datos= {
		"name" : $("#name").val(),
		"user": $("#user").val(),
		"pass" :  $("#pass").val()
	};
	$.ajax({
		data: datos,
    	url:   'registro.php',
        type:  'post',
        success:  function (response) 
        {
			if(response=='true')
				iniciarsesion();
			else
				alert(response);
	    }
	});
	return false;
}