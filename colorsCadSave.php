<?php

require_once("./inc/common.php");
checkAccess("colors");

$e = getParam("e", true);
$color_id = $e["color_id"];
$color_id_delete = $e["color_id_delete"];

try {
    if (!empty($color_id_delete)) {
        $dados = array(
            "id"           => getDbValue("SELECT id FROM colors WHERE id =" . $color_id_delete),
        );

        $sql_delete = "DELETE FROM colors WHERE id = :id";
        $stmt = $conn->prepare($sql_delete);
        $stmt->execute(['id' => $color_id_delete]);
        $actionText = "Exclusão efetuada com sucesso";
        $tipo = 'success';
    } else {
        $color_id                = getParam("color_id");
        $f_name                 = getParam("f_nome");
        $f_hex                = strtolower(getParam("f_cor"));

        $dados = array(
            "name"           => $f_name,
            "hex"          => $f_hex
        );


        if (!empty($color_id)) {
            $dados["id"] = $color_id;

            $sql_update = "
				UPDATE colors SET
					name = :name,
					hex = :hex
                WHERE id = :id
				";

            $stmt = $conn->prepare($sql_update);
            $stmt->execute($dados);
            $lastInsertId = $color_id;
            $actionText = "Alteração efetuada com sucesso";
        } else {

            $sql_insert = "
				INSERT INTO colors (
					name,
					hex
                ) VALUES (
                    :name,
                    :hex
                )
				";

            $stmt = $conn->prepare($sql_insert);
            $stmt->execute($dados);
            $lastInsertId = $conn->lastInsertId();
            $actionText = "Cadastro efetuado com sucesso";
        }

        $tipo = 'success';
    }
} catch (PDOException $e) {
    if (!empty($color_id_delete)) {
        $actionText = "Erro ao excluir";
    } else if (!empty($color_id)) {
        $actionText = "Erro ao alterar";
    } else {
        $actionText = "Erro ao cadastrar";
    }

    $extend = "text: 'Desculpe, ocorreu um erro";
    if (!empty($color_id) || !empty($color_id_delete)) {
        $extend .= " na ";
        if (!empty($color_id)) {
            $extend .= "alteração";
        } else {
            $extend .= "exclusão";
        }
        $extend .= ".";
    } else {
        $extend .= " no cadastro.";
    }
    $extend .= " Por favor, verifique os campos obrigatórios e/ou os dados inseridos. É possível que alguns dados já tenham sido utilizados.'";
    $tipo = 'error';
}

setAlert($actionText, $tipo, $extend);
redirect("colors.php");
