<h1>Editar cor</h1>

<hr>

<div class="row">
  <div class="col-md-12">
      <form action="controllers/ColorSave.php" method="post">
          <div class="form-group">
            <label >Nome:</label>
            <input type="text" name="cor" class="form-control"  value="<?php echo $cor->name;?>"  placeholder="Digite o nome do usuario">
            <input type="hidden" name="id" value="<?php echo $cor->id;?>" >
            <input type="hidden" name="acao" value="update" >
          </div>
          <input  type="submit"  class="btn btn-primary " style="width: 100%;" value="Editar" >
    </form>
  </div>
</div>