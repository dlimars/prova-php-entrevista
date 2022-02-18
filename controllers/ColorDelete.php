<?php

require '../connection.php';
require '../models/Color.php';

$connection = new Connection();
$_color = new Color($connection);

$_color->delete($_GET['id']);

Header( "HTTP/1.1 301 Moved Permanently");
Header( "Location: http://localhost:7070/?pg=lista_cores&r=sucesso");