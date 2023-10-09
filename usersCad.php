
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
    $query->addcolumn("(SELECT id FROM colors WHERE id = (SELECT color_id FROM user_colors WHERE user_id = users.id )) AS color_id");
    $query->addWhere("id", "=", $user_id);

    foreach ($conn->query($query->getSQL()) as $row) {
        $f_nome = $row["name"];
        $f_email = $row["email"];
        $color_id = $row['color_id'];
    }
}


$colors = new sqlQuery();
$colors->addTable("colors");
$colors->addcolumn("id");
$colors->addcolumn("name");

if ($conn->query($colors->getSQL()) && getDbValue($colors->getCount()) != 0) {
    foreach ($conn->query($colors->getSQL()) as $row) {
        $options_f_colors[] = array("id" => $row["id"], "name" => $row["name"]);
    }
} else {
    $options_f_colors[] = array("id" => NULL, "name" => "Nenhum registro encontrado!");
}

$form = new Form("usersCadSave.php");
$form->addField(hiddenField($user_id, "user_id"));
$form->addField(textField("Nome", $f_nome, NUll, true));
$form->addField(emailField("E-mail", $f_email, NUll, true, "^(?=.{1,256})(?=.{1,64}@)[^\s@]+@[^\s@]+\.[^\s@]{2,}$", NULL, "text-lowercase"));
$form->addField(listField("Cor", $options_f_colors, $color_id));
if (!empty($user_id)) {
    $form->addField('<button type="button" class="btn btn-outline-primary my-1 d-block" data-bs-toggle="modal" data-bs-target="#changePass">Alterar Senha</button>');
} else {
    $form->addField(passField("Senha", NULL, NULL, true, true));
    $form->addField(passField("Confirmar Senha", NULL, NULL, true));
}
$form->addField(submitBtn("Salvar"));

if (!empty($user_id)) {
    $changePass = new Form("usersCadSave.php");
    $changePass->addField(hiddenField($user_id, "user_id", "usuario_id"));
    $changePass->addField(passField("Senha", NULL, NULL, true, true));
    $changePass->addField(passField("Confirmar Senha", NULL, NULL, true));
    $changePass->addField(submitBtn("Salvar"));

    $modal = '
    <div class="modal fade" id="changePass" tabindex="-1" aria-labelledby="changePassLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-md">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="changePassLabel">Digite sua nova senha!</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ' . $changePass->writeHtml() . '
                </div>
            </div>
        </div>
    </div>
    ';
}

$template = new Template("Cadastro de Usuários");
$template->addContent($form->writeHtml(), true);
if (!empty($user_id)) {
    $template->addContent($modal);
}
$template->writeHtml();
