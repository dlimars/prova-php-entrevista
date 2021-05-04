<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
    <link rel="shortcut icon" href="images/cropped-logo_site-1.png" />
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
    <button type='button' class='btn btn-primary'data-bs-toggle='modal' data-bs-target='#id'>Criar Usuário</button>  <a href="views/list_users.php" class="btn btn-primary">Listar Usuários</a>
  </div>
  <div class="card-header">
    Entrevista BDTI
  </div>
</div>

<div class="modal fade" id="id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Cadastrar Usuário</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
          <!-- CORPO DO MODAL -->

            <form method="POST" action="">

                <div class="form-group form-row">

                <div class="col">
                    <label for="name">Nome</label>
                    <input type="text" class="form-control" id="name" value="">
                    <br>
                </div>

                <div class="col">
                    <label for="schedule_type_desc">E-mail</label>
                    <input type="text" class="form-control" id="email" value="">
                    <br>
                </div>
                
                <div class="col">
                <label for="exampleColorInput" class="form-label">Cor</label>
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
      </div>'





<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js" integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc" crossorigin="anonymous"></script>
</body>
</html>