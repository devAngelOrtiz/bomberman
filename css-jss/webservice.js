function historial()
{
	his=document.getElementById('historial');
	his.style.display='inline';
	his.innerHTML="<center><label class='textcompra'>HISTORIAL</label></center><br>";
	$.ajax({
			data:  null,
	    	url:   'webservice/historial.php',
	        type:  'post',
	        success:  function (response) {
	        		his.innerHTML+=response;
	       			his.innerHTML+="<input type='button' id='aceptar' value='Aceptar' onclick='return hidehistorial();' class='aceptar' />";
	        }
	    });
	return false;
}
function hidehistorial()
{
	document.getElementById('historial').style.display='none';
	return false;
}

function compravida()
{
	var datos= {
				'lives' : player.lives
			};
	$.ajax({
		data:  datos,
	   	url:   'webservice/compravida.php',
	    type:  'post',
		success:  function (response) {
		    if(response=='true')
	    	{
	    		player.lives+=1;
				document.getElementById('error').innerHTML="<label class='textazul'>Compra exitosa</lable>";
			}
	    	else
	    		document.getElementById('error').innerHTML="<label class='textrojo'>Hoy no joven, no puedes comprar mas vidas</lable>";
			setTimeout(function(){document.getElementById('error').innerHTML='';},1000);
			document.getElementById("vidas").innerHTML=player.lives;
	    }
	});
}

function compra()
{
	
	com=document.getElementById('historial');
	com.style.display='inline';
	com.innerHTML="<center><label class='textcompra'>COMPRAS</label></center><br>";
	if(PCompra)
		com.innerHTML+="<a onclick='return compravida();''><img src='img/vida+.jpg' class='ico-left hand' /><label class='texthistorial hand'>Comprar una vida</label></a>";
	else
		com.innerHTML+="<center><label class='texthistorial'>No puedes realizar compras<br>Debes inciar el juego para poder comprar</label></center>";
	com.innerHTML+="<div id='error'></div><br><input type='button' id='aceptar' value='Aceptar' onclick='return hidehistorial();' class='aceptar' />";

	return false;
}