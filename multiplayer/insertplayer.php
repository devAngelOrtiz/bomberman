<?php
	include('../funciones/DB.php');
	session_start();
	$db=ConexionPersistente();
	if($db!=null)
	{
		$query = $db->prepare("SELECT count(id) FROM multiplayer");
		$query->execute();
		if( $row=($query->fetch(PDO::FETCH_NUM)) )
			$player=$row[0]+1;
		if($player==2)
			$prepared = array(
				'id' => $player,
				'idp' => $_SESSION['id_usu'],
				'posx' => 544,
				'posy' => 416,
				'frame' => 0,
				'dir' => 0,
				'die' => 0,
				'lives' => 2,
			);
		else
			$prepared = array(
				'id' => $player,
				'idp' => $_SESSION['id_usu'],
				'posx' => 32,
				'posy' => 32,
				'frame' => 0,
				'dir' => 0,
				'die' => 0,
				'lives' => 2,
			);

		$query = $db->prepare("INSERT INTO multiplayer (id,id_player,pos_x,pos_y,dir,frame,die,lives) VALUES (:id, :idp, :posx, :posy, :frame, :dir, :die, :lives)");
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