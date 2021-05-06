<?php 
session_start();

if(isset($_POST["id"])  && !empty($_POST["id"])){

   require '../connection.php';
   $connection = new Connection();
   $id = addslashes($_POST["id"]);
   $insert = $connection->query("DELETE FROM users WHERE id = $id");

   $_SESSION["delete"] = "Usuário(a) excluído com sucesso! :D";
   header ("Location: ../views/list_users.php");
}
else
{
   $_SESSION["!delete"] = "Não foi possível excluir o usuário(a), contate o administrador!";
   header ("Location: ../views/list_users.php");
}
