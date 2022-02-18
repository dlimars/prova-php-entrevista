<div class="row mb-4">
  <div class="col-md-12">
    <h1>Visualizar usuario</h1>   
  </div>
</div>

<div class="row">
  <div class="col-md-12">
   <table class="table">
    <thead>
      <tr>
        <th scope="col">ID : <?php echo $usuario->id;?></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">NOME : <?php echo $usuario->user;?></th>
      </tr>
      <tr>
        <th scope="row">EMAIL : <?php echo $usuario->email;?></th>
      </tr>
      <tr>
        <th scope="row" class="text-center"><h4>Relação das cores vinculadas</h4></th>
      </tr>
      <tr>
        <th scope="row">
            <ul>
                <?php  foreach($cores as $cor) { ?>
                  <li><?php echo $cor->name;?></li>
                <?php  } ?>                
            </ul>
        </th>
      </tr>
    </tbody>
  </table>
</div>
</div>