<?php 

session_start();

require '../connection.php';
$connection = new Connection();
header ("Location: ../views/list_users.php");
$id = addslashes($_POST["id"]);
$name = addslashes($_POST["name"]);
$email = addslashes($_POST["email"]);
$color = $_POST["color"];
$tag_one = $_POST["tag_one"];
$tag_two = $_POST["tag_two"];
$tag_three = $_POST["tag_three"];

//verifica o value da cor inputada e trata para inserir na base
switch ($color) {
    case $color == "table-primary": $color = 1; break; 
    case $color == "table-secondary": $color = 2; break; 
    case $color == "table-success": $color = 3; break; 
    case $color == "table-danger": $color = 4; break; 
    case $color == "table-warning": $color = 5; break; 
    case $color == "table-info": $color = 6; break; 
    case $color == "table-light": $color = 7; break; 
    case $color == "table-dark": $color = 8; break; 
    default: $color = 7; break; 
}


$insert = $connection->query("UPDATE users SET name = '$name', email = '$email', tag_color = $color, tag_one = '$tag_one', tag_two = '$tag_two', tag_three = '$tag_three' WHERE id = $id ");

$_SESSION["update"] = "$name alterado(a) com sucesso! :D";
header ("Location: ../views/list_users.php");
