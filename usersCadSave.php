<?php

require_once("./inc/common.php");
checkAccess("users");

$e = getParam("e", true);
$user_id = $e["user_id"];
$user_id_delete = $e["user_id_delete"];

try {
    if (!empty($user_id_delete)) {
        $dados = array(
            "id"           => getDbValue("SELECT id FROM users WHERE id =" . $user_id_delete),
        );

        $sql_delete = "DELETE FROM users WHERE id = :id";
        $stmt = $conn->prepare($sql_delete);
        $stmt->execute(['id' => $user_id_delete]);
        $actionText = "Exclusão efetuada com sucesso";
        $tipo = 'success';
    } else {
        $user_id                = getParam("user_id");
        $f_name                 = getParam("f_nome");
        $f_email                = strtolower(getParam("f_email"));
        $f_password             = getParam("f_senha");
        $f_confirmar_password   = getParam("f_confirmar_senha");

        $dados = array(
            "name"           => $f_name,
            "email"          => $f_email
        );

        validar_email($f_email);

        if (!empty($f_password) && !empty($f_confirmar_password) && !empty($user_id)) {

            $dados_pass = array(
                "id"             => $user_id,
                "password"       => validar_senha($f_password, $f_confirmar_password),
            );

            $sql_update_pass = "UPDATE users SET password = :password WHERE id = :id";

            $stmt = $conn->prepare($sql_update_pass);
            $stmt->execute($dados_pass);
            $actionText = "Alteração efetuada com sucesso";
        } else {
            if (!empty($user_id)) {
                $dados["id"] = $user_id;

                $sql_update = "
				UPDATE users SET
					name = :name,
					email = :email
                WHERE id = :id
				";

                $stmt = $conn->prepare($sql_update);
                $stmt->execute($dados);
                $lastInsertId = $user_id;
                $actionText = "Alteração efetuada com sucesso";
            } else {

                if (!empty($f_password) && !empty($f_confirmar_password)) {
                    $dados["password"] = validar_senha($f_password, $f_confirmar_password);
                }

                $sql_insert = "
				INSERT INTO users (
					name,
					email,
					password
                ) VALUES (
                    :name,
                    :email,
                    :password
                )
				";

                $stmt = $conn->prepare($sql_insert);
                $stmt->execute($dados);
                $lastInsertId = $conn->lastInsertId();
                $actionText = "Cadastro efetuado com sucesso";
            }
        }
        $tipo = 'success';
    }
} catch (PDOException $e) {
    if (!empty($user_id_delete)) {
        $actionText = "Erro ao excluir";
    } else if (!empty($user_id)) {
        $actionText = "Erro ao alterar";
    } else {
        $actionText = "Erro ao cadastrar";
    }

    $extend = "text: 'Desculpe, ocorreu um erro";
    if (!empty($user_id) || !empty($user_id_delete)) {
        $extend .= " na ";
        if (!empty($user_id)) {
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
redirect("users.php");
