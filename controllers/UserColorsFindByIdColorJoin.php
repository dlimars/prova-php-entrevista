<?php
if(isset($_GET['id'])){
	require 'models/UserColors.php';
	require 'models/Color.php';

	$id = $_GET['id'];

	$connection = new Connection();
	$_uc = new UserColors($connection);

	$cor = $_uc->findByIdColorJoin($id)->fetch();
	$usuarios = $_uc->findByIdColorJoin($id)->fetchAll(PDO::FETCH_OBJ);

	if(!$cor){	
		$_color = new Color($connection);
		$cor = $_color->findById($id)->fetch();
	}
}
