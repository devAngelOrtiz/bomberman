<?php
	function conectar()
	{ 
		$dsn='mysql:host=localhost;dbname=bomberman';
		$username='root';
		$passsword='';
		try
		{
			$db=new PDO($dsn,$username, $passsword);
			return $db;	
		} 
		catch (PDOException $e) {
			//echo $e->getMessage();
    		return null;
		}		
	}

	function ConexionPersistente()
	{ 
		$dsn='mysql:host=localhost;dbname=bomberman';
		$username='root';
		$passsword='';
		try
		{
			$DBP=new PDO($dsn,$username, $passsword,array(PDO::ATTR_PERSISTENT => true));

			return $DBP;	
		} 
		catch (PDOException $e) {
			echo $e->getMessage();
    		return null;
		}		
	}
	
	function verificausuario($datos)
	{
		//session_start();
		$db=conectar();
		if($db!=null)
		{
			$prepared = array(
				'usuario' => $datos['usuario'],
				'contra' => $datos['contra']
				);
			$query = $db->prepare("SELECT id,name,user FROM jugadores WHERE user=:usuario AND password=:contra");
		    $query->execute($prepared);
			if( $row=($query->fetch(PDO::FETCH_NUM)) )
			{
				$_SESSION['id_usu']=$row[0];
				$_SESSION['name_user']=$row[1];
				$_SESSION['user']=$row[2];
				return "true";
			}
			return "Usuario y/o contraseña incorrectos";
		}
		else
			return "ERROR:No se pudo conectar a la base de datos";
	}

	function inserthistorial($id,$est,$pun,$vs)
	{
		//echo($id." ".$pun." ".$est);
		$db=conectar();
		if($db!=null)
		{
			$prepared = array(
				'id' => $id,
				'pun' => $pun,
				'est' => $est,
				'vs'=> $vs
			);
			$query = $db->prepare("INSERT INTO historia (idplayer,score,win,vs) VALUES (:id, :pun, :est, :vs)");
		    try {
		    	$query->execute($prepared);
		    	echo "true";
		    } 
		    catch ( PDOException $e) 
		    {
		    	echo "ERROR: No se puede insertar en la base de datos\nIntente mas tarde";
		    }	
		    	
		}
		else
			echo "ERROR:No se pudo conectar a la base de datos";
	}
	
	function registro($datos)
	{
		$db=conectar();
		if($db!=null)
		{
			$prepared = array(
				'name' => $datos['name'],
				'user' => $datos['user'],
				'pass' => $datos['pass']
				);
			$query = $db->prepare("INSERT INTO jugadores (name,user,password) VALUES (:name, :user, :pass)");
		    try {
		    	$query->execute($prepared);
		    	echo "true";
		    } 
		    catch ( PDOException $e) 
		    {
		    	echo "ERROR: No se puede insertar en la base de datos\nIntente mas tarde";
		    }	
		    	
		}
		else
			echo "ERROR:No se pudo conectar a la base de datos";
	}
?>