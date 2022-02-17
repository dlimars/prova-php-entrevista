<?php

require '../connection.php';
require '../models/Users.php';
require '../models/UserColors.php';

$connection = new Connection();
$_users = new Users($connection);
$_users->set_data($_POST);

if(null !==$_POST['acao'] && $_POST['acao']=='update'){
	$_users->update();
}else{
	$_users->store();
}



Header( "HTTP/1.1 301 Moved Permanently");
Header( "Location: http://localhost:7070/prova-php-entrevista/?pg=lista_usuarios&r=sucesso");


?>