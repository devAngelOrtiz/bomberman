<?php
	include('../funciones/DB.php');
	session_start();
	$db=ConexionPersistente();
	if($db!=null)
	{
		$query = $db->prepare("SELECT pos_x,pos_y FROM bombas WHERE id_player=:id");
		$query->execute(array('id' => $_POST['id']));
		if( $row=($query->fetch(PDO::FETCH_NUM)) )
		{
			echo $row[0].",".$row[1];
			$query = $db->prepare("DELETE FROM bombas WHERE id_player=:id");
			$query->execute(array('id' => $_POST['id']));	
		}
	}
	else
		echo "ERROR:No se pudo conectar a la base de datos";
?>