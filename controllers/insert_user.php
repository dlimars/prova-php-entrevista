<?php 

session_start();

if(isset($_POST["name"])  && !empty($_POST["name"]) && 
   isset($_POST["email"]) && !empty($_POST["email"])){

   require '../connection.php';
   $connection = new Connection();

   $name = addslashes($_POST["name"]);
   $email = addslashes($_POST["email"]);
   $color = addslashes($_POST["color"]);
   $tag_one = addslashes($_POST["tag_one"]);
   $tag_two = addslashes($_POST["tag_two"]);
   $tag_three = addslashes($_POST["tag_three"]);

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

   $insert = $connection->query("INSERT INTO users(name, email, tag_color, tag_one, tag_two, tag_three) VALUES('$name', '$email', $color, '$tag_one', '$tag_two', '$tag_three') ");

   $_SESSION["insere"] = "$name cadastrado(a) com sucesso! :D";
   header ("Location: ../views/list_users.php");
}
