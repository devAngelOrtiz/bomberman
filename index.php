<?php
	error_reporting(0);
	session_start();
	if($_SESSION['usera']!=null)
		header('Location: juego.php');
?>
<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" href="css-jss/estilos.css">
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
	<script src="css-jss/index.js"></script>
	<title>Inicio Sesion :: Bomberman</title>
</head>
<body class="fondo ">
	<div class="logo"><img src="img/logo.png"/></div>
	<div class="login">
		<div id="contenido">
			<p class='login-text'>Iniciar Sesión</p>
			<div id="error"></div>
			<form id ="login" onsubmit='return verifica();'>
				<table class="login-table">
				   	<tr>
				    	<td>
				   			<img class="login-ico" src="img/l_usuario.png"/>
						</td>
				    	<td>
				      		<input class="entrada-texto" id="usuario" type="text" placeholder="Usuario" autofocus required />
				    	</td>
			   		</tr>
			   		<tr>
				    	<td>
				   			<img class="login-ico" src="img/l_password.png"/>
						</td>
				    	<td>
				      		<input class="entrada-texto" id="contra" type="password" placeholder="Contraseña"required />
				    	</td>
			   		</tr>
		   		</table>
				<input type="submit" id="boton" value="Iniciar" class="boton" />
				<div class="registrar"><a href="" onclick='return formregistro()'>Registrar</a></div>
			</form>
		</div>
	</div>
</body>


</html>
