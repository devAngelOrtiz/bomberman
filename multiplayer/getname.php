<?php
	include('../funciones/DB.php');
	session_start();
	$db=ConexionPersistente();
	if($db!=null)
	{
		$query = $db->prepare("SELECT j.user FROM jugadores as j INNER JOIN multiplayer as m ON j.id=m.id_player where m.id=:id");
		try {
		   	$query->execute(array('id' => $_POST['id']));
			if( $row=($query->fetch(PDO::FETCH_NUM)) )
				echo $row[0];
		} 
		catch ( PDOException $e) 
		{
		   	echo "ERROR: No se puede insertar en la base de datos\nIntente mas tarde";
		}	
	}
	else
		echo "ERROR:No se pudo conectar a la base de datos";
?>