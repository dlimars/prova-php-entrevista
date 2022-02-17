<?php if(isset($_GET['r']) && $_GET['r']=='sucesso'){?>
<div class="alert alert-success" role="alert">
  This is a success alert—check it out!
</div>
<?php } ?>

<div class="row mb-2">
  <div class="col-md-12">
   <h1>Lista de cores</h1>
 </div>
</div>

<div class="row mb-4">
  <div class="col-md-12">
    <a href="?pg=create_cor" class="btn btn-success" >Nova cor</a>
  </div>
</div>

<div class="row">
  <div class="col-md-12">
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nome</th>
          <th scope="col" class="text-center">Ações</th>
        </tr>
      </thead>
      <tbody>
        <?php  foreach($lista_cores as $cor) { ?>
          <tr>
            <th scope="row"><?php echo $cor->id;?></th>
            <td><?php echo $cor->name;?></td>
            <td class="text-center">
              <a href="?pg=update_cor&id=<?php echo $cor->id;?>" class="btn btn-primary">Editar</a>  
              <!--<a href="controllers/ColorDelete.php?id=<?php echo $cor->id;?>" class="btn btn-danger">Deletar</a> -->
              <a href="?pg=visualizar_cor&id=<?php echo $cor->id;?>" class="btn btn-warning">visualizar</a>
            </td>
          </tr>
        <?php } ?>
      </tbody>
    </table>
  </div>
</div>