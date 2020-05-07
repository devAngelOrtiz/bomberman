<?php
	include('../funciones/DB.php');
	session_start();
	$db=ConexionPersistente();
	if($db!=null)
	{
		$prepared = array(
			'id' => $_POST['id'],
			'x' => $_POST['x'],
			'y' => $_POST['y']
		);

		$query = $db->prepare("INSERT INTO bombas (id_player,pos_x,pos_y) VALUES (:id, :x, :y)");
		try {
		   	$query->execute($prepared);
		   	echo $player;
		} 
		catch ( PDOException $e) 
		{
		   	echo "ERROR: No se puede insertar en la base de datos\nIntente mas tarde";
		}	
	}
	else
		echo "ERROR:No se pudo conectar a la base de datos";
?>