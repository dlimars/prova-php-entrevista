<?php

$id =  $_GET['id'];

require 'models/Color.php';
$connection = new Connection();
$_color = new Color($connection);
$cor = $_color->findById($id)->fetch();