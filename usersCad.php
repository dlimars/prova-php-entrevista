
<?php
require_once("./inc/common.php");
checkAccess("users");

$e = getParam("e", true);
$user_id = $e["user_id"];

if ($user_id) {
    $query = new sqlQuery();
    $query->addTable("users");
    $query->addcolumn("id");
    $query->addcolumn("name");
    $query->addcolumn("email");
    $query->addWhere("id", "=", $user_id);

    foreach ($conn->query($query->getSQL()) as $row) {
        $f_nome = $row["name"];
        $f_email = $row["email"];
    }
}

$form = new Form("usersCadSave.php");
$form->addField(hiddenField($user_id, "user_id"));
$form->addField(textField("Nome", $f_nome, NUll, true));
$form->addField(emailField("E-mail", $f_email, NUll, true, "^(?=.{1,256})(?=.{1,64}@)[^\s@]+@[^\s@]+\.[^\s@]{2,}$", NULL, "text-lowercase"));
$form->addField(passField("Senha"));
$form->addField(passField("Confirmar Senha"));
$form->addField(submitBtn("Salvar"));

$template = new Template("Cadastro de Usuários");
$template->addContent($form->writeHtml(), true);
$template->writeHtml();
