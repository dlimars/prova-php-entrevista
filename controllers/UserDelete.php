<?php

require '../connection.php';
require '../models/Users.php';
require '../models/UserColors.php';

$connection = new Connection();
$_u = new Users($connection);
$_u->delete($_GET['id']);

Header( "HTTP/1.1 301 Moved Permanently");
Header( "Location: http://localhost:7070/prova-php-entrevista/?pg=lista_usuarios&r=sucesso");