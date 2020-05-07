<?php
	include('../funciones/DB.php');
	session_start();
	$db=ConexionPersistente();
	if($db!=null)
	{
		$prepared = array(
			'posx' => $_POST['posx'],
			'posy' => $_POST['posy'],
			'dir' => $_POST['dir'],
			'frame' => $_POST['frame'],
			'die' => $_POST['die'],
			'lives' => $_POST['lives'],
			'id' => $_POST['id']
		);
		$query = $db->prepare("UPDATE multiplayer SET pos_x=:posx ,pos_y=:posy ,dir=:dir ,frame=:frame,die=:die, lives=:lives WHERE id=:id");
		try {
		   	$query->execute($prepared);
		} 
		catch ( PDOException $e) 
		{
		   	echo "ERROR: No se puede insertar en la base de datos\nIntente mas tarde";
		}	
	}
	else
		echo "ERROR:No se pudo conectar a la base de datos";
?>