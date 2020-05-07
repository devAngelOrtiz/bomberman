<html>
<body>
<?php
	//phpinfo();
	try
	{
		$client= new SoapClient(null,array('uri' => 'http://localhost/nav/web/', 'location' => 'http://localhost/nav/web/webservices.php'));
		
		$equipos = $client->OH();
		printf($_SESSION);
		print_r($equipos);
	}
	catch(SoapFault $e)
	{
		echo $e->faultstring;
	}
?>
<h1>Equipos y jugadores</h1>
<ul>

</ul>
</body>
</html>