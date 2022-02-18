<?php if(isset($_GET['r']) && $_GET['r']=='sucesso'){?>
<div class="alert alert-success" role="alert">
  This is a success alert—check it out!
</div>
<?php } ?>

<div class="row mb-2">
  <div class="col-md-12">
   <h1>Lista de usuários</h1>
 </div>
</div>

<div class="row mb-4">
  <div class="col-md-12">
    <a href="?pg=create_usuario" class="btn btn-success " >Novo usuario</a>
  </div>
</div>

<div class="row">
  <div class="col-md-12">
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nome</th>
          <th scope="col">E-mail</th>
          <th scope="col" class="text-center">Ações</th>
        </tr>
      </thead>
      <tbody>
        <?php  foreach($lista_usuarios as $user) { ?>
          <tr>
            <th scope="row"><?php echo $user->id;?></th>
            <td><?php echo $user->name;?></td>
            <td><?php echo $user->email;?></td>
            <td class="text-center">
              <a href="?pg=update_usuario&id=<?php echo $user->id;?>" class="btn btn-primary">Editar</a>  
              <a href="controllers/UserDelete.php?id=<?php echo $user->id;?>" class="btn btn-danger">Deletar</a> 
              <a href="?pg=visualizar_usuario&id=<?php echo $user->id;?>" class="btn btn-warning">visualizar</a>
            </td>
          </tr>
        <?php } ?>
      </tbody>
    </table>
  </div>
</div>