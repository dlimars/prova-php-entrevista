<?php require 'connection.php';

$pg = (null !==@$_GET['pg']) ? @$_GET['pg']  : 'lista_usuarios';

switch ($pg) 
{
    case 'lista_usuarios':  
        include_once('controllers/UserFindAll.php');   break;
    case 'create_usuario':  
        include_once('controllers/ColorFindAll.php');  
    break;
    case 'visualizar_usuario': 
        include_once('controllers/UserColorsFindByIdUser.php');
    break;
    case 'update_usuario': 
        include_once('controllers/UserColorsFindByIdUser.php');
        include_once('controllers/ColorFindAll.php');  
    break;
     case 'lista_cores': 
        include_once('controllers/ColorFindAll.php');  
    break;
     case 'visualizar_cor': 
        include_once('controllers/UserColorsFindByIdColorJoin.php');
    break;
    case 'update_cor': 
        include_once('controllers/ColorFindById.php');
    break;
}