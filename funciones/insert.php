<?php
	include('DB.php');
	session_start();
	inserthistorial($_SESSION['id_usu'],$_POST['est'],$_POST['pun'],$_POST['vs']);
?>