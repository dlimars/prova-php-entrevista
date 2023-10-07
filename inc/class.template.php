<?php

/**
 * @package template
 * @subpackage class_base
 * @version 1.0.3
 * @author pedro-azeredo <pedro.azeredo93@gmail.com>
 */

class Template
{

    private $setTittle;
    private $template;
    private $content;

    public function __construct($tittle = NULL)
    {
        $this->setTemplate();
        $this->setTittle = $tittle;
    }

    /**
     * setTemplate
     * Setar template default a ser utilizado na execução da classe
     *
     * @param string $template
     */
    public function setTemplate(string $template = "index")
    {

        if (file_exists(__DIR__ . '/templates/template.' . $template . '.php')) {
            $this->template = __DIR__ . '/templates/template.' . $template . '.php';
            return;
        }
        $this->template = __DIR__ . '/templates/template.index.php';
    }

    private function getTemplate()
    {
        if (file_exists($this->template)) {
            $outString = implode("", file($this->template));
            return $outString;
        }
        $outString = implode("", file($this->template));
        return $outString;
    }

    /**
     * addContent
     * Inclusão de conteúdo no template utilizado
     *
     * @param string $content
     * @param string $card
     */
    public function addContent(string $content, string $card = NULL)
    {
        if ($card == true) {
            $this->content .= "
                <div class='card'>
                    <div class='card-body'>
                        <div class='card-text'>
                            " . $content . "
                        </div>
                    </div>
                </div>
                ";
        } else {
            $this->content .= $content;
        }
    }

    /**
     * writeHtml
     * Imprimir HTML montado após conclusão das definições do template
     *
     * @return void
     */
    public function writeHtml()
    {
        $outHtml = $this->__replace($this->getTemplate(),   "[%description%]",       META["description"]);
        $outHtml = $this->__replace($outHtml,               "[%author%]",            META["author"]);
        $outHtml = $this->__replace($outHtml,               "[%icon%]",              META["icon"]);
        $outHtml = $this->__replace($outHtml,               "[%title%]",             TITTLE);
        $outHtml = $this->__replace($outHtml,               "[%title_page%]",        $this->setTittle);
        $outHtml = $this->__replace($outHtml,               "[%include_content%]",   $this->content);
        echo $outHtml;
    }

    /**
     * __replace
     * Responsável por fazer o str_replace no arquivo template
     *
     * @param [type] $string
     * @param [type] $search
     * @param [type] $replace
     * @return string
     */
    private function __replace($string, $search, $replace): string
    {
        $replaced = "";
        if (!is_array($replace)) {
            $replace = array($replace);
        }
        $replaced = str_replace($search, implode("\r\n", $replace), $string);
        return $replaced;
    }
}
