
<?php
require_once("./inc/common.php");
checkAccess("usuariosList");

$cad_usuarios_id        = getParam("cad_usuarios_id");
$f_nome                 = getParam("f_nome");
$f_email                = strtolower(getParam("f_email"));
$f_senha                = getParam("f_senha");
$f_confirmar_senha      = getParam("f_confirmar_senha");
$f_ativo                = getParam("f_ativo");

if ($f_ativo == "on") {
    $f_ativo = "true";
} else {
    $f_ativo = "false";
}

validar_email($f_email);

$dados = array(
    "nome"            => $f_nome,
    "email"           => $f_email,
    "status"          => $f_ativo
);

if (!empty($f_senha) && !empty($f_confirmar_senha)) {
    $dados["senha"] = validar_senha($f_senha, $f_confirmar_senha);
}

$e = getParam("e", true);
$cad_usuario_id_delete = $e["cad_usuario_id_delete"];
if ($cad_usuario_id_delete) {
    $dados["id"] = $cad_usuario_id_delete;
    $sql_delete = "DELETE FROM cad_usuarios WHERE id = :id";

    try {
        $conn->prepare($sql_delete)->execute(array("id" => $cad_usuario_id_delete));
        $actionText = "Exclusão efetuada com sucesso";
        $tipo = 'success';
    } catch (PDOException $e) {
        $actionText = "Erro ao excluir";
        $tipo = 'error';
    }
} else {
    if (!empty($cad_usuarios_id)) {

        $dados["id"] = $cad_usuarios_id;

        $sql_update = "
		UPDATE cad_usuarios SET
            nome = :nome,
			email = :email,
			status = :status,
            dt_update = NOW()
		";


        if ($f_ativo == "0") {
            $sql_update .= ", dt_delete = NOW()";
        }

        if (!empty($f_senha)) {
            $sql_update .= ", senha = :senha,";
        }

        $sql_update .= "WHERE id = :id";

        try {
            $conn->prepare($sql_update)->execute($dados);
            $lastInsertId = $cad_usuarios_id;
            $actionText = "Alteração efetuada com sucesso";
            $tipo = 'success';
        } catch (PDOException $e) {
            $actionText = "Erro ao alterar";
            $tipo = 'error';
        }
    } else {
        $dados["uniqid"] = uniqIdNew();

        $sql_insert = "
        INSERT INTO cad_usuarios (
            nome, 
            senha, 
            email,
            uniqid,
            status,
            dt_create
        ) 
        VALUES (
            :nome, 
            :senha, 
            :email,
            :uniqid, 
            :status,
            CURRENT_TIMESTAMP
        )
        RETURNING id;        
		";

        try {
            $conn->prepare($sql_insert)->execute($dados);
            $lastInsertId = $conn->lastInsertId();
            $actionText = "Cadastro efetuado com sucesso";
            $tipo = 'success';
        } catch (PDOException $e) {
            $actionText = "Erro ao cadastrar";
            $tipo = 'error';
        }
    }
}

setAlert($actionText, $tipo);
redirect("usuariosList.php");
