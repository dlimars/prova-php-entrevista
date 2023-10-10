
<?php
require_once("./inc/common.php");
checkAccess("users");

$table = new Table();
$table->cardHeader(btn("Novo", "usersCad.php"));
$table->addHeader("Nome");
$table->addHeader("E-mail");
$table->addHeader("Cor");
$table->addHeader("Editar",       "text-center", "col-1", false);

$query = new sqlQuery();
$query->addTable("users");
$query->addcolumn("id");
$query->addcolumn("name");
$query->addcolumn("email");
$query->addcolumn("(SELECT hex FROM colors WHERE id = (SELECT color_id FROM user_colors WHERE user_id = users.id )) AS hex");
$query->addOrder("id", "DESC");

if ($conn->query($query->getSQL())  && getDbValue($query->getCount()) != 0) {
    foreach ($conn->query($query->getSQL()) as $row) {

        if (!empty($row["email"])) {
            $email = "<a href='mailto:" . $row["email"] . "' target='_blank'>" . $row["email"] . "</a>";
        }

        $cor = NULL;
        if (!empty($row['hex'])) {
            $cor = "<input type='color' class='form-control form-control-color' value='" . $row["hex"] . "'/>";
        }

        $table->addCol($row["name"]);
        $table->addCol($email);
        $table->addCol($cor);
        $table->addCol(btn("<i class='fa-regular fa-pen-to-square'></i>", ["usersCad.php", ["user_id" => $row["id"]]], NULL, "btn-sm") . btn("<i class='fa-solid fa-xmark'></i>", ["usersCadSave.php", ["user_id_delete" => $row["id"]]], NULL, "btn-sm text-danger bg-transparent mx-1"), "text-center");
        $table->endRow();
    }
} else {
    $table->addCol("Nenhum registro encontrado!", "text-center", count($table->getHeaders()));
    $table->endRow();
}

$template = new Template("Listagem de Usuários");
$template->addContent($table->writeHtml());
$template->writeHtml();
