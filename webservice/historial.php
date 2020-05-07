<?php
	try
	{
		session_start();
		$client= new SoapClient(null,array('uri' => 'http://localhost/', 'location' => 'http://localhost/p/bomberman/webservice/webservices.php'));
		
		$partidas = $client->OH($_SESSION['id_usu']);
		echo"<table>
				<tr class='fondoC'>
					<td width='120'>Partida</td><td width='110'>Puntución</td><td width='90'>Estado</td>
				</tr>";
		for($i=0;$i<count($partidas);$i++)
			echo "<tr class='center'>
					<td>".$_SESSION['user']." vs ".$partidas[$i][0]."</td>
					<td>".$partidas[$i][1]."</td>
					<td>".$partidas[$i][2]."</td>
				</tr>";
		echo "</table><br>";
	}
	catch(SoapFault $e)
	{
		echo $e->faultstring;
	}
?>