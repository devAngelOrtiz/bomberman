<?php
	include('../funciones/DB.php');
	session_start();
	$db=ConexionPersistente();
	if($db!=null)
	{
		$query = $db->prepare("SELECT pos_x,pos_y,dir,frame,die,lives FROM multiplayer WHERE id=:id");
		$query->execute(array('id' => $_POST['id']));
		if( $row=($query->fetch(PDO::FETCH_NUM)) )
			echo $row[0].",".$row[1].",".$row[2].",".$row[3].",".$row[4].",".$row[5];	
	}
	else
		echo "ERROR:No se pudo conectar a la base de datos";
?>