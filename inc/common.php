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

// sessoes  setar e pegar
function setSession($name, $value)
{
	$_SESSION["sistema"][$name] = $value;
}

function getSession($name)
{
	return $_SESSION["sistema"][$name];
}

// função de redirect em JS
function redirect($url)
{
	if ($url == 'volta') {
		$url = $_SERVER["HTTP_REFERER"];
	}
	echo "
			<script>
				window.location = '" . $url . "';
			</script>
		";
	die();
}

//retorna um campo atraves de uma query
function getDbValue($sql)
{
	$conn = new PDO("sqlite:./database/db.sqlite") or print($conn->errorInfo());
	foreach ($conn->query($sql) as $row) {
		return $row[0];
	}
}

// funcao para verificar permissao de arquivo
function checkAccess()
{
	$access = getDbValue("SELECT id FROM cad_usuarios WHERE uniqid = '" . getSession('SYSGER') . "'");
	if (empty($access)) {
		setSession("SYSGER", "");
		redirect('login.php');
	}
}
