<?php
require_once("./inc/common.php");


$email       = getParam("email");
$password    = md5(getParam("password"));

$user = getDbValue("SELECT COUNT(*) FROM users WHERE email = '" . $email . "' AND password = '" . $password . "' LIMIT 1");
$user_id = getDbValue("SELECT id FROM users WHERE email = '" . $email . "' AND password = '" . $password . "' LIMIT 1");

try {

    if ($user == 0) {
        throw new Exception("Erro ao logar, tente novamente");
    }

    setSession('SYSGER', $user_id);
    redirect("index.php");
} catch (Exception $e) {
    setAlert($e->getMessage(), "error");
    redirect("login.php");
}
