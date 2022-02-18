<?php
require 'models/Color.php';
$connection = new Connection();
$_color = new Color($connection);
$lista_cores = $_color->findAll();