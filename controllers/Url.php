<?php
require 'models/Url.php';

$_r = isset($_GET['pg']) ? $_GET['pg'] : null;

$rota = new Url($_r);
$nome_rota = $rota->get_rota();

if($nome_rota=='create_usuario' || $nome_rota=='create_cor' || $nome_rota=='update_usuario'|| $nome_rota =='update_cor'){
	$nome_rota = 'views/formulario/'.$nome_rota .'.php';
}else{
	$nome_rota = 'views/'.$nome_rota .'.php';
}

require $nome_rota;
