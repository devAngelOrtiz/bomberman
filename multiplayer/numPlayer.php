<?php
	include('../funciones/DB.php');
	session_start();
	$db=ConexionPersistente();
	if($db!=null)
	{
		$query = $db->prepare("SELECT count(id) FROM multiplayer");
		try {
		   	$query->execute();
			if( $row=($query->fetch(PDO::FETCH_NUM)) )
				if($row[0]==2)
					echo "true";
				else
					echo "false";
		} 
		catch ( PDOException $e) 
		{
		   	echo "ERROR: No se puede insertar en la base de datos\nIntente mas tarde";
		}	
	}
	else
		echo "ERROR:No se pudo conectar a la base de datos";
?>