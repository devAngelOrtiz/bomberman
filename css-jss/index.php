<?php 
	session_start();
	include("../funciones/DB.php");
	if(($ans=verificausuario($_POST))=="true")
		echo "true";
	else
		echo $ans;
?>