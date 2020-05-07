<?php
	session_start();
	if($_SESSION['user']==null)
		header('Location: index.php');
?>
<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" href="css-jss/estilos.css">
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
	<script src="css-jss/juego.js"></script>
	<script src="css-jss/webservice.js"></script>
	<title>Bomberman::<?=$_SESSION['name_user']?></title>
</head>


<body class="fondoGame">
	<div id='player' class='player'>
		<label class='texttitulo'>BIENVENIDO : <?=$_SESSION['name_user']?></label>
		<input type="submit" value="Cerrar Sesion" class="botonCS" onclick="window.location.href='cerrarsession.php'"/>
		<input type="submit" value="Historial" class="botonH" onclick="return historial();"/>
		<a onclick="return compra();"> <img class="chica" src="img/compra.png"/> </a>
		
	</div>
	<div class="canvas">
		<canvas id="miCanvas" width="610" height="480">	El navegador no soporta canvas	</canvas>
	</div>
	<div  id='score' class="divscore">
		<div class='contenido'>
			<label class='textscore'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspVidas : </label><label id='vidas' class='textscore'></label>
		</div><br>
		<div class='contenido'>
			<label class='textscore'>Puntuación : </label><label id='puntuacion' class='textscore'></label>
		</div>
	</div>
	<div  id='scoremul' class="divscore">
		<div class='contenido'>
			<label class='textscore'><?=$_SESSION['user']?>: </label><label id='p1' class='textscore'></label>
		</div><br>
		<div class='contenido'>
			<label id='lbl_p2' class='textscore'></label><label id='p2' class='textscore'></label>
		</div>
	</div>
	<div id='historial' class='divhistorial'>
	</div>
</body>


</html>
