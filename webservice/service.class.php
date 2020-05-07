<?php
class Service
{
		function OH($id)
		{	
			$dsn='mysql: host=localhost; dbname=bomberman';
			$username='root';
			$password='';

			$db=new PDO($dsn,$username, $password);

			$query = $db->prepare("SELECT vs,score,win vs FROM historia WHERE idplayer=:id");
		    $query->execute( array(	'id' => $id	));
		   	$partidas=array();
			$i=0;
			while($row=($query->fetch(PDO::FETCH_NUM)))
			{
				$partidas[$i++]=array(
					0 => $row[0],
					1 => $row[1],
					2 => $row[2],
				);
			}
			return $partidas;
		}
		
		function CV($lives)
		{
			$ans=false;
			if($lives<5)
				$ans=true;
			
			
			return $ans;
		}
}
?>