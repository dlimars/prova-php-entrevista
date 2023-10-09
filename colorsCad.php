
<?php
require_once("./inc/common.php");
checkAccess("colors");

$e = getParam("e", true);
$color_id = $e["color_id"];

if ($color_id) {
    $query = new sqlQuery();
    $query->addTable("colors");
    $query->addcolumn("id");
    $query->addcolumn("name");
    $query->addcolumn("hex");
    $query->addWhere("id", "=", $color_id);

    foreach ($conn->query($query->getSQL()) as $row) {
        $f_nome = $row["name"];
        $f_hex = $row["hex"];
    }
}

$form = new Form("colorsCadSave.php");
$form->addField(hiddenField($color_id, "color_id"));
$form->addField(textField("Nome", $f_nome, NUll, true));
$form->addField(hexField("Cor", $f_hex, NULL, true));
$form->addField(submitBtn("Salvar"));

$template = new Template("Cadastro de Cores");
$template->addContent($form->writeHtml(), true);
$template->writeHtml();
