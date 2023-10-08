<?php

/**
 * @package sqlQuery
 * @subpackage sqlite
 * @author pedro-azeredo <pedro.azeredo93@gmail.com>
 */

class sqlQuery
{

    private $select;
    private $from;
    private $where;
    private $order;
    private $limit;
    private $other;
    private $groupby;
    private $selectName;

    /**
     * addTable function
     * função responsável por incluir tabelas na query
     *
     * @param string $table
     * @param string|null $sigla
     * @return void
     */
    public function addTable(string $table, string $sigla = NULL)
    {
        if (!$sigla) {
            $this->from[] = $table;
        } else {
            $this->from[] = $table . " " . $sigla;
        }
    }


    /**
     * addcolumn function
     * função responsável por incluir colunas na query
     *
     * @param string $coluna
     * @param string|null $sigla
     * @return void
     */
    public function addcolumn(string $coluna, ?string $sigla = NULL)
    {
        if (!$sigla) {
            $this->select[] = $coluna;
        } else {
            $this->select[] = $coluna . " AS " . $sigla;
        }

        $this->selectName[] = $coluna;
    }


    /**
     * addWhere function
     * função responsável por incluir novas condições na query
     *
     * @param string $first
     * @param string $condition
     * @param string $second
     * @return void
     */
    public function addWhere(string $first, string $condition, string $second = NULL)
    {
        if (!$second) {
            $this->where[] = $first . " " . $condition;
        } else {
            $this->where[] = $first . " " . $condition . " " . $second;
        }
    }


    /**
     * addOrder function
     * função responsável por criar a ordenação da query
     *
     * @param string $by
     * @param string $order
     * @return void
     */
    public function addOrder(string $by, string $order = NULL)
    {
        if (!$order) {
            $this->order[] = $by . " ASC";
        } else {
            $this->order[] = $by . " " . $order;
        }
    }

    /**
     * addGroupBy function
     * função responsável por criar agrupamentos da query
     *
     * @param string $by
     * @param string $order
     * @return void
     */
    public function addGroupBy(string $by)
    {
        $this->groupby[] = $by;
    }

    /**
     * setLimit function
     *
     * @param integer $qtd
     * @param integer $start
     * @return void
     */
    public function setLimit(int $qtd, int $start = 0)
    {
        $this->limit = " LIMIT " . $qtd . " OFFSET " . $start;
    }


    /**
     * getCount function
     * função responsável por retornar o COUNT da query SEM LIMIT
     *
     * @return void
     */
    public function getCount()
    {
        $out  = " SELECT COUNT(*) as QTD";
        $out .= " FROM ";
        $out .= implode(" JOIN ", $this->from);

        $f_searchTableBuscar = getParam("f_searchTableBuscar");
        $f_searchTablePor = getParam("f_searchTablePor");

        if ($f_searchTableBuscar && $f_searchTablePor) {
            $this->addWhere($this->selectName[$f_searchTablePor - 1], "ilike", "'%" . $f_searchTableBuscar . "%'");
        }

        if ($this->where) {
            $out .= " WHERE " . implode(" AND ", $this->where);
        }

        if ($this->groupby) {
            $out .= " GROUP BY " . implode(" , ", $this->groupby);
        }

        $out .= $this->limit;

        return $out;
    }

    public function getSQL(bool $pre = FALSE): string
    {

        $out  = " SELECT ";
        $out .= implode(", ", $this->select);
        $out .= " FROM ";
        $out .= implode(", ", $this->from);

        $getE = getParam("e", true);
        $fOrder = $getE["fOrder"];
        $fOrderBy = $getE["fOrderBy"];
        if ($fOrderBy) {
            $this->addOrder($fOrderBy, $fOrder);
        }

        $f_searchTableBuscar = getParam("f_searchTableBuscar");
        $f_searchTablePor = getParam("f_searchTablePor");

        if ($f_searchTableBuscar && $f_searchTablePor) {
            $this->addWhere($this->selectName[$f_searchTablePor - 1], "ilike", "'%" . $f_searchTableBuscar . "%'");
        }

        if ($this->where) {
            $out .= " WHERE " . implode(" AND ", $this->where);
        }

        if ($this->groupby) {
            $out .= " GROUP BY " . implode(" , ", $this->groupby);
        }

        if ($this->order != "" && COUNT($this->order) > 0) {
            $out .= " ORDER BY ";
            $out .= implode(", ", $this->order);
        }

        if ($this->limit) {
            $out .= $this->limit;
        }

        if ($pre) {
            return "<pre>" . $out . "</pre>";
        }
        return $out;
    }

}
