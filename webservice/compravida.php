<?php
	try
	{
		$client= new SoapClient(null,array('uri' => 'http://localhost/', 'location' => 'http://localhost/p/bomberman/webservice/webservices.php'));
		
		$vida = $client->CV($_POST['lives']);
		if($vida)
			echo "true";
		else
			echo "false";
	}
	catch(SoapFault $e)
	{
		echo $e->faultstring;
	}
?>