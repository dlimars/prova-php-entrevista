<?php

require_once("./inc/common.php");

$email       = getParam("email");
$password    = md5(getParam("password"));

$query = new sqlQuery();
$query->addTable("users");
$query->addcolumn("id");
$query->addWhere("email", "=", "'" . $email . "'");
$query->addWhere("password", "=", "'" . $password . "'");
$query->setLimit(1);

try {
    if ($conn->query($query->getSQL()) && getDbValue($query->getCount()) != 0) {
        foreach ($conn->query($query->getSQL()) as $row) {
            setSession('SYSGER', $row['id']);
            redirect("index.php");
        }
    } else {
        throw new Exception("Erro ao logar, tente novamente");
    }
} catch (Exception $e) {
    setAlert($e->getMessage(), "error");
    redirect("login.php");
}
