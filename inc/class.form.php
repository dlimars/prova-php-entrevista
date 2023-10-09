<?php

/**
 * @package fornm
 * @subpackage class_base
 * @author pedro-azeredo <pedro.azeredo93@gmail.com>
 */

class Form
{

    private $form;
    private $fields;
    private $upload;

    /**
     * Form function
     * Função responsavel por agrupar dados básicos de criação de uma tag FORM
     *
     * @param string $action
     * @param string $name
     * @param string $id
     * @param string $method
     */
    public function __construct(string $action, string $name = NULL, string $id = NULL, string $method = "POST")
    {
        $this->form["action"] = $action;
        $this->form["name"] = $name == NULL ? "formSubmit" : $name;
        $this->form["id"] = $id == NULL ? "formSubmit" : $id;
        $this->form["method"] = $method;
    }

    public function setUpload()
    {
        $this->upload = true;
    }

    /**
     * addField function
     * Função responsável por incluir novo campo no formulário
     *
     * @param string $field
     */
    public function addField(string $field)
    {
        $this->fields[] = $field;
    }

    /**
     * writeHtml
     * Imprimir HTML montado após conclusão das definições do template
     *
     * 
     */
    public function writeHtml()
    {
        if ($this->upload == true) {
            $upload = "enctype='multipart/form-data'";
        }
        $outHtml = "
                <form class='auth-login-form mt-2' name='" . $this->form["name"] . "' id='" . $this->form["id"] . "' action='" . $this->form["action"] . "' method='" . $this->form["method"] . "' " . $upload . ">
                    " . implode("", $this->fields) . "
                </form>
            ";
        return $outHtml;
    }
}

// funcoes responsaveis pelos campos dos formulários

/**
 * emailField function
 *
 * @param string $placeholder
 * @param string $value
 * @param string $name
 * @param string $id
 * @param string $css
 * @param string $js
 * @return string
 */
function emailField(string $placeholder = NULL, string $value = NULL, string $name = NULL, bool $required = false, string $pattern = NULL, string $id = NULL, string $css = NULL, string $js = NULL): string
{
    $slug = slug($placeholder);
    $_name  = $name == NULL ? "f_" . $slug : $name;
    $_id    = $id == NULL ? "id_" . $slug : $id;

    $simb = '';
    $inputRequired = '';
    if ($required == true) {
        $simb = '<span class="text-danger">*</span>';
        $inputRequired = 'required';
    }

    if ($placeholder) {
        $label = "<label for='" . $_id . "' class='form-label'>" . $placeholder . $simb . "</label>";
    }

    if ($pattern != NULL) {
        $pattern = 'pattern="' . $pattern . '"';
    }

    $out = "
            <fieldset class='mb-1' id='js_" . $slug . "'>
                " . $label . "
                <input type='email' class='form-control " . $css . "' name='" . $_name . "' id='" . $_id . "'" . $pattern . " placeholder='" . $placeholder . "' value='" . $value . "' " . $js . " " . $inputRequired . "/>
            </fieldset>
        ";

    return $out;
}

/**
 * textField function
 *
 * @param string $placeholder
 * @param string $value
 * @param string $name
 * @param string $id
 * @param string $css
 * @param string $js
 * @return string
 */
function textField(string $placeholder = NULL, string $value = NULL, string $name = NULL, bool $required = false, string $pattern = NULL, string $id = NULL, string $css = NULL, string $js = NULL): string
{
    $slug = slug($placeholder);
    $_name  = $name == NULL ? "f_" . $slug : $name;
    $_id    = $id == NULL ? "id_" . $slug : $id;

    $simb = '';
    $inputRequired = '';
    if ($required == true) {
        $simb = '<span class="text-danger">*</span>';
        $inputRequired = 'required';
    }

    if ($placeholder) {
        $label = "<label for='" . $_id . "' class='form-label'>" . $placeholder . $simb . "</label>";
    }

    if ($pattern != NULL) {
        $pattern = 'pattern="' . $pattern . '"';
    }

    $out = "
            <fieldset class='mb-1' id='js_" . $slug . "'>
                " . $label . "
                <input type='text' class='form-control " . $css . "' name='" . $_name . "' id='" . $_id . "'" . $pattern . " placeholder='" . $placeholder . "' value='" . $value . "' " . $js . " " . $inputRequired . "/>
            </fieldset>
        ";

    return $out;
}

/**
 * passField function
 *
 * @param string $placeholder
 * @param string $value
 * @param string $name
 * @param string $id
 * @param string $css
 * @param string $js
 * @return string
 */
function passField(string $placeholder = NULL, string $value = NULL, string $name = NULL, bool $required = false, bool $progress = false, string $pattern = NULL, string $id = NULL, string $css = NULL, string $js = NULL, bool $disabled = false): string
{
    $slug = slug($placeholder);
    $_name  = $name == NULL ? "f_" . $slug : $name;
    $_id    = $id == NULL ? "id_" . $slug : $id;

    $simb = '';
    $inputRequired = '';
    if ($required == true) {
        $simb = '<span class="text-danger">*</span>';
        $inputRequired = 'required';
    }

    if ($placeholder) {
        $label = "<label for='" . $_id . "' class='form-label'>" . $placeholder . $simb . "</label>";
    }

    if ($pattern != NULL) {
        $pattern = 'pattern="' . $pattern . '"';
    }

    $disabledAttr = '';
    if ($disabled) {
        $disabledAttr = 'readonly';
    }

    $out = "
        <fieldset class='mb-1' id='js_" . $slug . "'>
            " . $label . "
            <div class='field position-relative'>
                <input type='password' class='form-control password-input " . $css . "' name='" . $_name . "' id='" . $_id . "'" . $pattern . " placeholder='" . $placeholder . "' value='" . $value . "' " . $js . " " . $inputRequired . " " . $disabledAttr . " autocomplete='new-password'/>
            </div>
        </fieldset>
    ";

    return $out;
}

/**
 * submitBtn function
 *
 * @param string $placeholder
 * @param string $css
 * @param string $js
 * @return string
 */
function submitBtn(string $placeholder, string $css = "btn-primary", string $js = NULL): string
{
    return "<button type='submit' class='btn " . $css . "' " . $js . ">" . $placeholder . "</button>";
}


function listField(string $placeholder = NULL, $content, string $value = NULL, string $name = NULL,  bool $required = false, string $id = NULL, string $css = NULL, string $js = NULL): string
{
    $slug = slug($placeholder);
    $_name  = $name == NULL ? "f_" . $slug : $name;
    $_id    = $id == NULL ? "id_" . $slug : $id;

    $simb = '';
    $inputRequired = '';
    if ($required == true) {
        $simb = '<span class="text-danger">*</span>';
        $inputRequired = 'required';
    }

    if ($placeholder) {
        $label = "<label for='" . $_id . "' class='form-label'>" . $placeholder . $simb . "</label>";
    }

    if (is_array($content)) {
        $optionsBuscarPor = array();
        for ($z = 0; $z < COUNT($content); $z++) {
            $selected = "";
            if ($content[$z]["id"] == $value) {
                $selected = "selected";
            }
            $optionsBuscarPor[] = "<option " . $selected . " value='" . $content[$z]["id"] . "'>" . $content[$z]["name"] . "</option>";
        }
    }

    $out = "
            <fieldset class='mb-1' id='js_" . $slug . "'>
                " . $label . "
                <select name='" . $_name . "' id='" . $_id . "' class='form-select" . $css . "' " . $js . " " . $inputRequired . ">
                    " . implode("", $optionsBuscarPor) . "
                </select>
            </fieldset>
        ";

    return $out;
}


function hiddenField(string $value = NULL, string $name = NULL, string $id = NULL)
{
    $slug = slug($value);
    $_name  = $name == NULL ? "f_" . $slug : $name;
    $_id    = $id == NULL ? "id_" . $name : $id;

    return "<input type='hidden' name='" . $_name . "' id='" . $_id . "' value='" . $value . "'/>";
}

/**
 * hexField function
 *
 * @param string $placeholder
 * @param string $value
 * @param string $name
 * @param string $id
 * @param string $css
 * @param string $js
 * @return string
 */
function hexField(string $placeholder = NULL, string $value = NULL, string $name = NULL,  bool $required = false, string $id = NULL, string $css = NULL, string $js = NULL): string
{
    $slug = slug($placeholder);
    $_name  = $name == NULL ? "f_" . $slug : $name;
    $_id    = $id == NULL ? "id_" . $slug : $id;

    $simb = '';
    $inputRequired = '';
    if ($required == true) {
        $simb = '<span class="text-danger">*</span>';
        $inputRequired = 'required';
    }

    if ($placeholder) {
        $label = "<label for='" . $_id . "' class='form-label'>" . $placeholder . $simb . "</label>";
    }

    $out = "
            <fieldset class='mb-1' id='js_" . $slug . "'>
                " . $label . "
                <input type='color' class='form-control form-control-color " . $css . "' name='" . $_name . "' id='" . $_id . "' placeholder='" . $placeholder . "' value='" . $value . "' " . $js . " " . $inputRequired . "/>
            </fieldset>
        ";

    return $out;
}
