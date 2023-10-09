<?php

/**
 * @package pagination
 * @subpackage class_base
 * @author pedro-azeredo <pedro.azeredo93@gmail.com>
 */
class Pagination
{
    private int $countData;
    private string $addParams = '';

    public function setSQL(string $sql): void
    {
        $this->countData = getDbValue($sql);
    }

    public function addParams($addParams)
    {
        $this->addParams = "&" . $addParams;
    }

    public function startLimit(): int
    {
        $getParams = getParam("e", true);
        $paginaAtual = intval($getParams["fPage"] ?? 1);
        $startLimit = ($paginaAtual - 1) * PAGINATION;

        if ($paginaAtual === 1 || $paginaAtual === 0) {
            $startLimit = 0;
        }

        return $startLimit;
    }

    public function writeHtml()
    {
        $qtdPaginas = ceil($this->countData / PAGINATION);
        $getParams = $_GET["e"] ?? null;

        $paramsArray = [];
        if (!empty($getParams)) {
            $paramsString = base64_decode(strrev($getParams));
            parse_str($paramsString, $paramsArray);
        }

        $paginaAtual = intval($paramsArray["fPage"] ?? 1);
        $paginaAnterior = $paginaAtual - 1;
        $paginaPosterior = $paginaAtual + 1;


        $startDisabled = ($paginaAtual === 1) ? "disabled" : "";
        $paginaAnterior = ($paginaAtual === 1) ? 1 : $paginaAnterior;
        $endDisabled = ($paginaAtual === $qtdPaginas) ? "disabled" : "";

        if ($paginaPosterior > $qtdPaginas) {
            $paginaPosterior = $qtdPaginas;
        }

        $paginas = [];

        $paginas[] = "
            <li class='page-item $startDisabled'>
                <a class='page-link' href='" . QuemSou() . "?e=" . strrev(base64_encode(strrev("fPage=" . $paginaAnterior . $this->addParams))) . "'>&laquo;</a>
            </li>
        ";

        for ($x = 1; $x <= $qtdPaginas; $x++) {
            $pageActive = ($paginaAtual == $x) ? "active disabled" : "";
            $paginas[] = "
                <li class='page-item {$pageActive}'>
                    <a class='page-link' href='" . QuemSou() . "?e=" . strrev(base64_encode(strrev("fPage=" . $x . $this->addParams))) . "'>$x</a>
                </li>
            ";
        }

        $paginas[] = "
            <li class='page-item {$endDisabled}'>
                <a class='page-link' href='" . QuemSou() . "?e=" . strrev(base64_encode(strrev("fPage=" . $paginaPosterior . $this->addParams))) . "'>&raquo;</a>
            </li>
        ";

        $out = "";
        if ($qtdPaginas > 1) {
            $out .= <<<HTML
                <nav aria-label='paginacao'>
                    <ul class='d-none pagination pagination-sm justify-content-center'>{{pages}}</ul>
                </nav>
            HTML;

            $out = str_replace('{{pages}}', implode("", $paginas), $out);
            $out = str_replace('{{url}}', QuemSou(), $out);
        }

        return $out;
    }
}
