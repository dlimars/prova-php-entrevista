<?php

/**
 * @package table
 * @subpackage class_base
 * @author pedro-azeredo <pedro.azeredo93@gmail.com>
 */

class Table
{

    private $cardHeader;
    private $header = array();
    private $column = array();
    private $searchBy;

    /**
     *  addHeader
     * Responsável por incluir novas colunas do tipo header
     *
     * @param string $text
     * @param string $align
     * @param integer $size
     * @param bool $order
     * @return void
     */
    public function addHeader(string $text, string $align = NULL, string $size = NULL, bool $ordem = true)
    {
        $getE = getParam("e", true);
        $fOrder = $getE["fOrder"];
        $fOrderBy = $getE["fOrderBy"];
        if (!$fOrder) {
            $fOrder = "ASC";
        } else {
            if ($fOrderBy == COUNT($this->header) + 1) {
                if ($fOrder == "ASC") {
                    $fOrder = "DESC";
                } else {
                    $fOrder = "ASC";
                }
            } else {
                $fOrder = "ASC";
            }
        }
        $fOrderBy = COUNT($this->header) + 1;
        $b = "fOrder=" . $fOrder . "&fOrderBy=" . $fOrderBy;
        $e = strrev(base64_encode(strrev($b)));

        if (!$ordem) {
            $this->header[] = "
                    <th class='" . $align . " " . $size . "'>
                        " . $text . "
                    </th>
                ";
        } else {
            $this->searchBy[] = ["id" => $fOrderBy, "name" => $text];
            $this->header[] = "
                    <th class='" . $align . " " . $size . "'>
                        <a href='?e=" . $e . "'>
                            " . $text . "
                        </a>
                    </th>
                ";
        }
    }

    public function getHeaders()
    {
        return $this->header;
    }

    /**
     * addCol
     * Responsável por incluir novas colunas do tipo body
     *
     * @param string $text
     * @param [type] $align
     * @param [type] $colspam
     * @return void
     */
    public function addCol($text, string $align = NULL, string $colspan = NULL)
    {
        if ($colspan) {
            $_colspan = "colspan='" . $colspan . "'";
        }
        $this->column[] = "<td class='" . $align . "' " . $_colspan . ">" . $text . "</d>";
    }

    /**
     * endRow
     * Finaliza uma ROW
     *
     * @return void
     */
    public function endRow()
    {
        $this->column[] = "</tr>";
    }

    /**
     * cardHeader
     * Cria um header na tabela com conteúdo informado
     *
     * @param string $string
     * @return void
     */
    public function cardHeader(string $string)
    {
        $this->cardHeader[] = $string;
    }

    /**
     * writeHtml
     * Imprimir HTML montado após conclusão das definições do template
     *
     * @return string
     */
    public function writeHtml()
    {

        $cardHeader = "";

        if (COUNT($this->cardHeader) > 0) {
            $cardHeader = "
                    <div class='card-header d-flex flex-row align-items-start justify-content-between'>
                        " . implode("", $this->cardHeader) . "
                    </div>
                ";
        }

        if (COUNT($this->column) > 0) {
            $column = implode("", $this->column);
        } else {
            $column = "</tr>";
        }

        $outHtml = "
                <div class='row' data-aos='fade-up' data-aos-anchor-placement='center-bottom' data-aos-duration='800'>
                    <div class='col-lg-12 mb-4'>
                        <div class='card pb-2'>
                            " . $cardHeader . "
                            <div class='responsiveTable'>
                                <table class='table align-items-center table-flush table-striped table-hover'>
                                    <thead class='thead-light'>
                                        <tr>
                                            " . implode("", $this->header) . "
                                        </tr>
                                    </thead>
                                    <tbody class='table-group-divider' <div class='row'>
                                        <tr>
                                            " . $column . "
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            ";
        return $outHtml;
    }
}
