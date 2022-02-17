<h1>Editar usuario</h1>

<hr>
<div class="row">
  <div class="col-md-12">
      <form action="controllers/UserSave.php" method="post">
          <input type="hidden" name="acao" value="update" >
          <input type="hidden" name="id" value="<?php echo $usuario->id;?>">
          <div class="form-group">
            <label >Nome:</label>
            <input type="text" name="name" class="form-control" value="<?php echo $usuario->user;?>">
          </div>
          <div class="form-group">
            <label >Email: </label>
            <input type="email"  name="email" class="form-control" value="<?php echo $usuario->email;?>">
          </div>
          <div class="form-group">
            <label >Selecione uma, e ou mais cores:</label>
            <select name="color_id[]" class="custom-select"  multiple  required="">
                <?php  
                    foreach($lista_cores as $k => $cor) {
                      if(isset($cores[$k]->color_id)){
                          $cdc =  $cores[$k]->color_id;   
                      }
                      ?>
                      <option value="<?php echo $cor->id ?>" <?php  if($cor->id == $cdc){ echo 'selected';} ?>  >  <?php echo $cor->name;?></option><?php 
                    } 
                ?>
            </select>
          </div>
          <input  type="submit"  class="btn btn-primary " style="width: 100%;" value="Enviar" >
    </form>
  </div>
</div>        