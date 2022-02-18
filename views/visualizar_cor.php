<div class="row mb-4">
  <div class="col-md-12">
    <h1>Visualizar cor</h1>   
  </div>
</div>

<div class="row">
  <div class="col-md-12">
   <table class="table">
    <thead>
      <tr>
        <th scope="col">ID: <?php echo $cor->id;?></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Cor : <?php echo $cor->name;?></th>
      </tr>
      <tr>
        <th scope="row" ><h5>Relação dos usuarios vinculados a esta cor:</h5></th>
      </tr>
      <?php if($usuarios){ ?>
          <tr>
            <th scope="row">
                <ul>
                  <?php  foreach($usuarios as $usuario) { ?>
                      <li><?php echo $usuario->user;?> -  <?php echo $usuario->email;?></li>
                    <?php  } ?> 
                </ul>
            </th>
          </tr><?php

      }else{ ?>
          <tr>
            <th scope="row">
                <div class="alert alert-warning" role="alert">
                  Nenhum usuario vinculado!
                </div>
            </th>
          </tr><?php
      }?>
    </tbody>
  </table>
</div>
</div>