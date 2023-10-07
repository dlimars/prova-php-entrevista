<?php

require_once("./inc/common.php");

$form = new Form("loginValidar.php");
$form->addField(textField("E-mail", NULL, "email", true));
$form->addField(passField("Senha", NULL, NULL, true));
$form->addField(submitBtn("Acessar"));

$template = new Template("Login");
$template->setTemplate("login");
$template->addContent($form->writeHtml());
$template->writeHtml();
