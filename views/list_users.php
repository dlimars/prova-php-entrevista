<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
    <link rel="shortcut icon" href="../images/cropped-logo_site-1.png" />
    <title>Teste BDTI</title>
</head>
<br><br>
<body>
<div class="card" style="text-align: center;">
  <div class="card-header">
    Entrevista BDTI
  </div>
  <div class="card-body">
    <h5 class="card-title">Teste PHP</h5>
    <p class="card-text">Sistema de gerenciamento de usuários by: <a href="#">Gabriel Guedes Flores</a></p>
    <a href="#" class="btn btn-primary">Criar Usuário</a>  <a href="../index.php" class="btn btn-primary">Home</a>   
  </div>
  <div class="card-header">
    Entrevista BDTI
  </div>
</div>
<br>
<h3 style="text-align: center;">Lista de Usuários</h3>
<br>
<?php

require '../connection.php';

$connection = new Connection();

$users = $connection->query("SELECT users.id, users.name, users.email FROM users, colors WHERE users.id = colors.id");
?>

<table class='table table-striped' style="text-align: center;">

<tr>
    <th>ID</th>    
    <th>Nome</th>    
    <th>Email</th>
    <th>Ação</th>    
</tr>

<?php
foreach($users as $user) {

    echo sprintf("
<tr>
        <td>%s</td>
        <td>%s</td>
        <td>%s</td>
        <td>
        <button type='button' class='btn btn-primary btn-sm'data-bs-toggle='modal' data-bs-target='#id_%s'>Editar</button>
        <button type='button' class='btn btn-danger btn-sm'>Excluir</button>
        </td>
</tr>",
        $user->id, $user->name, $user->email, $user->id, $user->id);

}

echo "</table>";
$users = $connection->query("SELECT users.id, users.name, users.email, colors.name as cor 
FROM users, colors WHERE users.id = colors.id");

foreach($users as $user) { 
    $colors = $connection->query("SELECT * from colors");
    //foreach ($colors as $color) {    

echo sprintf('<div class="modal fade" id="id_%s" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Dados do Usuário</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
          <!-- CORPO DO MODAL -->

            <form method="POST" action="">
            <input type="hidden" id="id" name="id" value="%s">

                <div class="form-group form-row">

                <div class="col">
                    <label for="name">Nome</label>
                    <input type="text" class="form-control" id="name" value="%s">
                    <br>
                </div>

                <div class="col">
                    <label for="schedule_type_desc">E-mail</label>
                    <input type="text" class="form-control" id="email" value="%s">
                    <br>
                </div>
                
                <div class="col">
                <label for="exampleColorInput" class="form-label">Tag Color</label>
                <input type="color" class="form-control form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color">
                
                </div>

                </div>
            <!-- FIM DO CORPO DO MODAL -->
            </div>
            </form>
            <form method="POST" action="../controllers/ReprovaConsulta.php">

              <div class="modal-footer">
                <input type="hidden" id="schedule_id" name="schedule_id" value="">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                <button type="submit" class="btn btn-success">Salvar</button>
              </div>

            </form>

          </div>
        </div>
      </div>', 
      
      $user->id, $user->id,  $user->name, $user->email, $user->cor, $user->id, $user->id);
 } ?>
      <!-- Fim Modal -->

<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js" integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc" crossorigin="anonymous"></script>
</body>
</html>