
<?php
require_once("./inc/common.php");
checkAccess("colors");

$table = new Table();
$table->cardHeader(btn("Novo", "colorsCad.php"));
$table->addHeader("Nome");
$table->addHeader("Cor");
$table->addHeader("Editar",       "text-center", "col-1", false);

$query = new sqlQuery();
$query->addTable("colors");
$query->addcolumn("id");
$query->addcolumn("name");
$query->addcolumn("hex");
$query->addOrder("id", "DESC");

if ($conn->query($query->getSQL())  && getDbValue($query->getCount()) != 0) {
    foreach ($conn->query($query->getSQL()) as $row) {
        $table->addCol($row["name"]);
        $cor = NULL;
        if (!empty($row['hex'])) {
            $cor = "<input type='color' class='form-control form-control-color' value='" . $row["hex"] . "'/>";
        }
        $table->addCol($cor);
        $table->addCol(btn("<i class='fa-regular fa-pen-to-square'></i>", ["colorsCad.php", ["color_id" => $row["id"]]], NULL, "btn-sm") . btn("<i class='fa-solid fa-xmark'></i>", ["colorsCadSave.php", ["color_id_delete" => $row["id"]]], NULL, "btn-sm text-danger bg-transparent mx-1"), "text-center");
        $table->endRow();
    }
} else {
    $table->addCol("Nenhum registro encontrado!", "text-center", count($table->getHeaders()));
    $table->endRow();
}

$template = new Template("Listagem de Cores");
$template->addContent($table->writeHtml());
$template->writeHtml();
