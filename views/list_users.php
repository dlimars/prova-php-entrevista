<?php 
/*
ESTA PÁGINA ALÉM DE LISTAR OS USUÁRIOS, IRÁ LISTAR 3 MODAIS ABAIXO DA TABLE.

MODAL UPDATE
MODAL DELETE
MODAL INSERT

*/
session_start(); ?>
<!DOCTYPE html>
<html lang="pt-br">
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
      <p class="card-text">Sistema de gerenciamento de usuários by: <a href="https://www.linkedin.com/in/gabrielguedesflores/" target="_blank">Gabriel Guedes Flores</a></p>
      <button type='button' class='btn btn-primary'data-bs-toggle='modal' data-bs-target='#cria'>Criar Usuário</button>  <a href="../index.php" class="btn btn-primary">Home</a>   
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
$users = $connection->query("SELECT users.id, users.name, users.email, colors.value, colors.name as cor FROM users, colors WHERE users.tag_color = colors.id");
?>

<!-- TABELA QUE LISTA USUÁRIOS -->
<table class='table table-striped' style="text-align: center;">
<tr>
    <th>ID</th>    
    <th>Nome</th>    
    <th>Email</th>
    <th>Color</th>
    <th>Ação</th>    
</tr>

<?php
foreach($users as $user) {

echo "
<tr>
        <td class='$user->value'>$user->id</td>
        <td class='$user->value'>$user->name</td>
        <td class='$user->value'>$user->email</td>
        <td class='$user->value'>$user->cor</td>
        <td class='$user->value'>
        <button type='button' class='btn btn-primary btn-sm'data-bs-toggle='modal' data-bs-target='#id_$user->id'>Editar</button>
        <button type='button' class='btn btn-danger btn-sm' data-bs-toggle='modal' data-bs-target='#delete_$user->id'>Excluir</button>
        </td>
</tr>"; }

echo "</table>";


//FAZ A QUERY PARA MOSTRAR O MODAL QUE EDITA O USUÁRIO
$users = $connection->query("SELECT users.id, users.name, users.email, colors.name as name_color, tag_one, tag_two, tag_three FROM users, colors WHERE users.tag_color = colors.id");

foreach($users as $user) { 

//MODAL QUE IRÁ EDITAR OS DADOS DO USUÁRIO
echo '<div class="modal fade" id="id_'.$user->id.'" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Dados do Usuário</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
          <!-- CORPO DO MODAL -->

            <form method="POST" action="../controllers/update_user.php">
            <input type="hidden" id="id" name="id" value="'.$user->id.'">

                <div class="form-group form-row">

                <div class="col">
                    <label for="name">Nome</label>
                    <input type="text" class="form-control" name="name" id="name" value="'.$user->name.'">
                    <br>
                </div>

                <div class="col">
                    <label for="email">E-mail</label>
                    <input type="text" class="form-control" name="email" id="email" value="'.$user->email.'">
                    <br>
                </div>

                <label for="">Escolha a Cor da Linha</label>
                <select name="color" class="form-select" aria-label="Default select example">
                    <option selected>Selecione...</option>';

              $colors = $connection->query("SELECT * FROM colors");

              foreach ($colors as $color) {
                echo ' <option value="'.$color->value.'">'.$color->name.'</option>' ; } 

                echo '
                    <br>
                </select>

                <div class="col">
                <br>
                <label for="">Cores das Linhas Disponíveis: </label>
                <table class="table">
                <tr>
                    <td class="table-primary">Azul</td>
                    <td class="table-secondary">Cinza</td>
                    <td class="table-success">Verde</td>
                    <td class="table-danger">Vermelho</td><br>
                    
                </tr>
                <tr>
                    
                    <td class="table-warning">Amarelo</td>
                    <td class="table-info">Verde Limão</td>
                    <td class="table-light">Branco</td>
                    <td class="table-dark">Preto</td>
                </tr>
                </table>
                </div>
                <div class="col 6">
                    <label for="name">Escolha a cor de suas tags: </label><br>
                    <input type="color" name="tag_one" value="'.$user->tag_one.'"> <input name="tag_two" type="color" value="'.$user->tag_two.'"> <input type="color" name="tag_three" value="'.$user->tag_three.'"> 
                <br>
                </div>

                </div>
            <!-- FIM DO CORPO DO MODAL -->
            </div>

              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                <button type="submit" class="btn btn-success">Salvar</button>
              </div>

            </form>

          </div>
        </div>
      </div>';
 } 


//MODAL QUE IRÁ CONFIRMAR A DELEÇÃO DO USUÁRIO
$users = $connection->query("SELECT id, name FROM users");

foreach($users as $user) {
    echo sprintf('
      <div class="modal fade" id="delete_%s" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Dados do Usuário</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <!-- CORPO DO MODAL -->

                <form method="POST" action="../controllers/delete_user.php">
                <input type="hidden" id="id" name="id" value="%s">

                    <div class="form-group form-row">

                    <div class="col">
                        <label for="name">Você tem certeza que deseja excluir o usuário</label>
                        %s?
                        <br>
                    </div>
                    </div>
                <!-- FIM DO CORPO DO MODAL -->
              </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                  <button type="submit" class="btn btn-danger">Excluir</button>
                </div>
              </form>
          </div>
        </div>
      </div>', $user->id, $user->id, $user->name);}

$colors = $connection->query("SELECT * from colors"); 
?>
<!--MODAL QUE CRIA USUÁRIO-->

<div class="modal fade" id="cria" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Cadastrar Usuário</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
              <div class="modal-body">
                  <form method="POST" action="../controllers/insert_user.php">

                    <div class="form-group form-row">

                    <div class="col">
                        <label>Nome</label>
                        <input type="text" class="form-control" name="name" value="" required>
                        <br>
                    </div>

                    <div class="col">
                        <label for="email">E-mail</label>
                        <input type="text" class="form-control" name="email" value="" required>
                        <br>
                    </div>

                    <label for="">Escolha a Cor da Linha</label>
                    <select class="form-select" aria-label="Default select example" name="color">
                        <option value="" selected>Selecione...</option>
                        <?php foreach ($colors as $color) { 
                          echo ' <option value="'.$color->value.'">'.$color->name.'</option>' ; } ?>                
                        <br>
                    </select>

                    <div class="col">
                    <br>
                    <label for="">Cores das Linhas Disponíveis: </label>
                    <table class="table">
                    <tr>
                        <td class="table-primary">Azul</td>
                        <td class="table-secondary">Cinza</td>
                        <td class="table-success">Verde</td>
                        <td class="table-danger">Vermelho</td><br>
                        
                    </tr>
                    <tr>
                        
                        <td class="table-warning">Amarelo</td>
                        <td class="table-info">Verde Limão</td>
                        <td class="table-light">Branco</td>
                        <td class="table-dark">Preto</td>
                    </tr>
                    </table>
                    </div>
                    <div class="col 6">
                        <label for="name">Escola a cor de suas tags: </label><br>
                        <input type="color" value="#FFFFFF" name="tag_one"> <input type="color" value="#FFFFFF" name="tag_two"> <input type="color" value="#FFFFFF" name="tag_three"> 
                        <br>
                    </div>
                  </div>

                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                      <button type="submit" class="btn btn-success">Salvar</button>
                    </div>
                </form>
              </div>
          </div>
        </div>


<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js" integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc" crossorigin="anonymous"></script>
0 
<script>
	<?php if(isset($_SESSION['insere'])){?>
            alert('<?php 
							echo $_SESSION["insere"]; 
							unset( $_SESSION["insere"]);
				  }?>');
</script>
<script>
	<?php if(isset($_SESSION['update'])){?>
            alert('<?php 
							echo $_SESSION["update"]; 
							unset( $_SESSION["update"]);
				  }?>');
</script>
<script>
	<?php if(isset($_SESSION['delete'])){?>
            alert('<?php 
							echo $_SESSION["delete"]; 
							unset( $_SESSION["delete"]);
				  }?>');
</script>
<script>
	<?php if(isset($_SESSION['!delete'])){?>
            alert('<?php 
							echo $_SESSION["!delete"]; 
							unset( $_SESSION["!delete"]);
				  }?>');
</script>
</body>
</html>
