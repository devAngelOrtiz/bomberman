<?php
	include "service.class.php";
	$soap = new SoapServer(null,array('uri'=>'http://localhost/'));
	$soap -> setClass('Service');
	$soap -> handle();
?>