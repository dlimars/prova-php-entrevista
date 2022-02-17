<h1>Novo usuario</h1>

<hr>

<div class="row">
  <div class="col-md-12">
    <form action="controllers/UserSave.php" method="post">
      <div class="form-group">
        <label >Nome:</label>
        <input type="text" name="name" class="form-control" placeholder="Digite o nome do usuario" required="">
      </div>
      <div class="form-group">
        <label >Email: </label>
        <input type="email" name="email" class="form-control" placeholder="Digite um email válido"  required="">
      </div>
      <div class="form-group">
        <label >Selecione uma, e ou mais cores:</label>
        <select name="color_id[]" class="custom-select"  multiple  required="">
          <?php  foreach($lista_cores as $cor) { ?>
          <option value="<?php echo $cor->id;?>"><?php echo $cor->name;?></option>
        <?php } ?>
        </select>
      </div>
      <input  type="submit"  class="btn btn-success " style="width: 100%;" value="Salvar" >
    </form>
  </div>
</div>