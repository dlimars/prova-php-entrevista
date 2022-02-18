<?php

require '../connection.php';
require '../models/Color.php';

$connection = new Connection();
$_color = new Color($connection);
$_color->set_data($_POST);

if(null !==$_POST['acao'] && $_POST['acao']=='update'){
	$_color->update();
}else{
	$_color->store();
}

Header( "HTTP/1.1 301 Moved Permanently");
Header( "Location: http://localhost:7070/?pg=lista_cores&r=sucesso");