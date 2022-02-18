<?php

if(isset($_GET['id'])){

require 'models/UserColors.php';

$connection = new Connection();
$_uc = new UserColors($connection);

$usuario = $_uc->findByIdUser($_GET['id'])->fetch();
$cores = $_uc->findByIdUser($_GET['id'])->fetchAll(PDO::FETCH_OBJ);
}