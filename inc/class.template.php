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
    private $getCss;
    private $getJs;

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
        $templatePath = __DIR__ . '/templates/template.' . $template . '.php';

        if (file_exists($templatePath)) {
            $this->template = $templatePath;
        } else {
            $this->template = __DIR__ . '/templates/template.index.php';
        }
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
     * inclusao de conteudo no template utilizado
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
     * addCss
     * responsavel por registrar CSSs no template
     *
     * @param mixed $cssString
     */
    public function addCss(string $cssString)
    {
        if (file_exists($cssString)) {
            $this->getCss .= "<link href='" . $cssString . "' rel='stylesheet' type='text/css'>";
        } else {
            $this->getCss .= "<s>" . $cssString . "</style>";
        }
    }

    /**
     * addJs
     * responsavel por registrar JSs no template
     *
     * @param mixed $cssString
     */
    public function addJs(string $jsString)
    {
        if (file_exists($jsString)) {
            $this->getJs .= "<link href='" . $jsString . "' rel='stylesheet' type='text/css'>";
        } else {
            $this->getJs .= "<script>" . $jsString . "</script>";
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
        $outHtml = $this->__replace($outHtml,               "[%css%]",               $this->getCss);
        $outHtml = $this->__replace($outHtml,               "[%include_content%]",   $this->content);
        $outHtml = $this->__replace($outHtml,               "[%js%]",                $this->getJs);
        $outHtml = $this->__replace($outHtml,               "[%sweetalert%]",        getAlert());
        $outHtml = $this->__replace($outHtml,               "[%include_sidebar%]",   $this->getSidebar());

        echo $outHtml;
    }

    private function getSidebar(): string
    {

        $outHtml = "
                <div class='main-menu-content'>
                    <ul class='navigation navigation-main' id='main-menu-navigation' data-menu='menu-navigation'>
                        <li class='nav-item'>
                            <a class='d-flex align-items-center' href='index.php'>
                                <i data-feather='home'></i>
                                <span class='menu-item text-truncate' data-i18n='Home'>Home</span>
                            </a>
                        </li>
                        <li class='nav-item'>
                            <a class='d-flex align-items-center' href='users.php'>
                                <i data-feather='users'></i>
                                <span class='menu-item text-truncate' data-i18n='Usuários'>Usuários</span>
                            </a>
                        </li>
                         <li class='nav-item'>
                            <a class='d-flex align-items-center' href='colors.php'>
                                <i data-feather='pen-tools'></i>
                                <span class='menu-item text-truncate' data-i18n='Usuários'>Cores</span>
                            </a>
                        </li>
                        <li class='nav-item'>
                            <a class='d-flex align-items-center' href='loginSair.php'>
                                <i data-feather='log-out'></i>
                                <span class='menu-item text-truncate' data-i18n='Sair'>Sair</span>
                            </a>
                        </li>
                    </ul>
                </div>
            ";
        return $outHtml;
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
