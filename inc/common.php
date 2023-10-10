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
require_once("class.form.php"); // class.form
require_once("class.template.php"); // class.template
require_once("class.sqlQuery.php"); // class.sqlQuery
require_once("class.table.php"); // class.table
require_once("class.bootstrap.php"); // class.bootstrap

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
	$access = getDbValue("SELECT id FROM users WHERE id = '" . getSession('SYSGER') . "'");
	if (empty($access)) {
		setSession("SYSGER", "");
		redirect('login.php');
	}
}

// funcao para criar slugs
function slug($string)
{
	$baseCaracters = array(
		'Š' => 'S', 'š' => 's', 'Ð' => 'Dj', '' => 'Z', '' => 'z', 'À' => 'A', 'Á' => 'A', 'Â' => 'A', 'Ã' => 'A', 'Ä' => 'A',
		'Å' => 'A', 'Æ' => 'A', 'Ç' => 'C', 'È' => 'E', 'É' => 'E',  'Ê' => 'E', 'Ë' => 'E', 'Ì' => 'I', 'Í' => 'I', 'Î' => 'I',
		'Ï' => 'I', 'Ñ' => 'N', 'Ń' => 'N', 'Ò' => 'O', 'Ó' => 'O',  'Ô' => 'O', 'Õ' => 'O', 'Ö' => 'O', 'Ø' => 'O', 'Ù' => 'U', 'Ú' => 'U',
		'Û' => 'U', 'Ü' => 'U', 'Ý' => 'Y', 'Þ' => 'B', 'ß' => 'Ss', 'à' => 'a', 'á' => 'a', 'â' => 'a', 'ã' => 'a', 'ä' => 'a',
		'å' => 'a', 'æ' => 'a', 'ç' => 'c', 'è' => 'e', 'é' => 'e',  'ê' => 'e', 'ë' => 'e', 'ì' => 'i', 'í' => 'i', 'î' => 'i',
		'ï' => 'i', 'ð' => 'o', 'ñ' => 'n', 'ń' => 'n', 'ò' => 'o',  'ó' => 'o', 'ô' => 'o', 'õ' => 'o', 'ö' => 'o', 'ø' => 'o', 'ù' => 'u',
		'ú' => 'u', 'û' => 'u', 'ü' => 'u', 'ý' => 'y', 'ý' => 'y',  'þ' => 'b', 'ÿ' => 'y', 'ƒ' => 'f',
		'ă' => 'a', 'î' => 'i', 'â' => 'a', 'ș' => 's', 'ț' => 't',  'Ă' => 'A', 'Î' => 'I', 'Â' => 'A', 'Ș' => 'S', 'Ț' => 'T',
	);
	$string = strtr(trim($string), $baseCaracters);
	$string = str_replace("-", "", $string);
	$string = str_replace(" ", "_", $string);

	return strtolower($string);
}

// funcao para setar erro
function setAlert($mensagem, $tipo, $extend = NULL)
{
	setSession('title',	$mensagem);
	setSession('icon',		$tipo);
	setSession('extend', $extend);
}

//funcao para mostrar erro
function getAlert()
{
	if (getSession('title') != "") {

		$out = "
			<script>
				Swal.fire({
					showConfirmButton: false,
					timer: 2500,
					title: '" . getSession('title') . "',
					icon: '" . getSession('icon') . "',
					" . getSession('extend') . "
				});
			</script>
			";

		setSession('title',		'');
		setSession('icon',		'');
		setSession('extend',	'');
		return $out;
	}
}

// funcao para pegar parametros
function getParam($name, $encriptado = false)
{
	if ($encriptado == false) {
		if ($_POST[$name] != "") {
			return $_POST[$name];
		} else {
			if ($_GET[$name] != "") {
				return $_GET[$name];
			}
		}
	} else {
		$e = $_GET[$name];
		$getIn = strrev(base64_decode(strrev($e)));
		$explodeGet = explode("&", $getIn);
		$out = array();
		for ($x = 0; $x < COUNT($explodeGet); $x++) {
			$explodeVal = explode("=", $explodeGet[$x]);
			$out[$explodeVal[0]] = $explodeVal[1];
		}

		return $out;
	}
}

//funcao para validar senhas
function validar_senha($f_senha, $f_confirmar_senha)
{
	if (isset($f_senha) && !empty($f_senha) && isset($f_confirmar_senha) && !empty($f_confirmar_senha)) {
		if ($f_senha === $f_confirmar_senha) {
			return md5($f_senha);
		} else {
			setAlert('Senhas não conferem!', 'error');
			header(sprintf('location: %s', $_SERVER['HTTP_REFERER']));
			exit;
		}
	} else {
		setAlert('Campos obrigatórios não preenchidos!', 'error');
		header(sprintf('location: %s', $_SERVER['HTTP_REFERER']));
		exit;
	}
}

// funcao para validar email
function validar_email($email)
{
	if (!empty($email)) {
		if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
			return true;
		} else {
			setAlert('Email inválido!', 'error');
			header(sprintf('location: %s', $_SERVER['HTTP_REFERER']));
			exit;
		}
	}
}
