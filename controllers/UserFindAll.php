<?php
require 'models/Users.php';
$connection = new Connection();
$_users = new Users($connection);
$lista_usuarios =  $_users->findAll();