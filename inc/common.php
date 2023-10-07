<?php
error_reporting(E_ERROR);

/**
 * @package common
 * @version 1.0.3
 * @author pedro-azeredo <pedro.azeredo93@gmail.com>
 */

session_start();

/**
 * @package common
 * @subpackage third-itens
 */
require_once("connection.php");	// connection sqlite
require_once("config.php");	// configuration

date_default_timezone_set('America/Sao_Paulo');
