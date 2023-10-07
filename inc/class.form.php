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
 * tel function
 *
 * @param string $placeholder
 * @param string $value
 * @param string $name
 * @param string $id
 * @param string $css
 * @param string $js
 * @return string
 */
function telField(string $placeholder = NULL, string $value = NULL, string $name = NULL, bool $required = false, string $pattern = NULL, string $id = NULL, string $css = NULL, string $js = NULL): string
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
                <input type='tel' class='form-control " . $css . "' name='" . $_name . "' id='" . $_id . "' " . $pattern . " placeholder='" . $placeholder . "' value='" . $value . "' " . $js . " " . $inputRequired . "/>
            </fieldset>
        ";

    return $out;
}

/**
 * urlField function
 *
 * @param string $placeholder
 * @param string $value
 * @param string $name
 * @param string $id
 * @param string $css
 * @param string $js
 * @return string
 */
function urlField(string $placeholder = NULL, string $value = NULL, string $name = NULL, bool $required = false, string $id = NULL, string $css = NULL, string $js = NULL): string
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
                <input type='url' class='form-control " . $css . "' name='" . $_name . "' id='" . $_id . "' placeholder='" . $placeholder . "' value='" . $value . "' " . $js . " " . $inputRequired . "/>
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
function passField(string $placeholder = NULL, string $value = NULL, string $name = NULL,  bool $required = false, string $pattern = NULL, string $id = NULL, string $css = NULL, string $js = NULL): string
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
                <div class='field position-relative'>
                    <input type='password' class='form-control " . $css . "' name='" . $_name . "' id='" . $_id . "'" . $pattern . " placeholder='" . $placeholder . "' value='" . $value . "' " . $js . " " . $inputRequired . " autocomplete='new-password'/>
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

function listDataList(string $placeholder = NULL, $content, string $value = NULL, string $name = NULL, bool $required = false, string $id = NULL, string $css = NULL, string $js = NULL): string
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

    $optionsBuscarPor = array();
    if (is_array($content)) {
        for ($z = 0; $z < COUNT($content); $z++) {
            $selected = "";
            if ($content[$z]["id"] == $value) {
                $selected = "selected";
            }
            $optionsBuscarPor[] = "<option " . $selected . " value='" . $content[$z]["name"] . "'>" . $content[$z]["name"] . "</option>";
        }
    }

    $out = "
            <div class='mb-1' id='js_" . $slug . "'>
                " . $label . "
                <input type='text' list='list-" . $_id . "' class='form-control" . $css . "' name='" . $_name . "' id='" . $_id . "' placeholder='" . $placeholder . "' value='" . $value . "' " . $js . " " . $inputRequired . " autocomplete='off'/>
                <datalist id='list-" . $_id . "'>
                    <option value=''>-- Escolha --</option>
                    " . implode("", $optionsBuscarPor) . "
                </datalist>
            </div>
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

function checkboxField($placeholder, string $value = NULL, string $name = NULL,  bool $required = false, string $id = NULL, string $css = NULL, string $js = NULL): string
{
    $slug = slug($placeholder);
    $_name  = $name == NULL ? "f_" . $slug : $name;
    $_id    = $id == NULL ? "id_" . $slug  : $id;

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
            <fieldset class='mb-1 form-check form-switch mb-1' id='js_" . $slug . "'>
                <input type='checkbox' class='form-check-input' id='" . $_id . "' name='" . $_name . "' " . $value . " " . $inputRequired . ">
                <label for='" . $_id . "' class='custom-control-label'>" . $placeholder . "</label>
            </fieldset>
        ";

    return $out;
}

function listMultipleField(string $placeholder = NULL, $content, $value = NULL, string $name = NULL, bool $required = NULL, string $id = NULL, string $css = NULL, string $js = NULL): string
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

    if (!is_array($value)) {
        $value[] = $value;
    }

    if (is_array($content)) {
        $optionsBuscarPor = array();
        for ($z = 0; $z < COUNT($content); $z++) {
            $selected = "";
            if (in_array($content[$z]["id"], $value)) {
                $selected = "selected";
            }
            $optionsBuscarPor[] = "<option " . $selected . " value='" . $content[$z]["id"] . "'>" . $content[$z]["name"] . "</option>";
        }
    }

    $out = "
            <fieldset class='mb-1' id='js_" . $slug . "'>
                " . $label . "
                <select multiple name='" . $_name . "[]' id='" . $_id . "' class='form-select" . $css . "' " . $js . " " . $inputRequired . ">
                    " . implode("", $optionsBuscarPor) . "
                </select>
            </fieldset>
        ";

    return $out;
}

function fileField(string $placeholder = NULL, string $value = NULL, string $name = NULL,  bool $required = false, string $id = NULL, string $css = NULL, string $js = NULL): string
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

    if ($value != "config/") {
        $d_value = "<a href='../uploads/" . $value . "' target='_blank'>" . $value . "</a>";
    }

    $out = "
            <fieldset class='mb-1' id='js_" . $slug . "'>
                " . $label . "
                <input type='file' class='form-control " . $css . "' name='" . $_name . "' id='" . $_id . "' placeholder='" . $placeholder . "' " . $js . " " . $inputRequired . "/>
                " . $d_value . "
            </fieldset>
        ";

    return $out;
}

function textAreaField(string $placeholder = NULL, string $value = NULL, string $name = NULL,  bool $required = false, string $id = NULL, string $css = NULL, string $js = NULL): string
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
                <textarea class='form-control " . $css . "' name='" . $_name . "' id='" . $_id . "' placeholder='" . $placeholder . "' " . $js . " " . $inputRequired . "/>" . $value . "</textarea>
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
function readField(string $placeholder = NULL, string $value = NULL): string
{

    $slug = slug($placeholder);

    if ($placeholder) {
        $label = "<label for='" . $slug . "' class='form-label'>" . $placeholder . "</label>";
    }

    $out = "
            <fieldset class='mb-1' id='js_" . $slug . "'>
                " . $label . "
                <span class='form-control-plaintext' >" . $value . "</span>
            </fieldset>
        ";

    return $out;
}

/**
 * timeField function
 *
 * @param string $placeholder
 * @param string $value
 * @param string $name
 * @param string $id
 * @param string $css
 * @param string $js
 * @return string
 */
function timeField(string $placeholder = NULL, string $value = NULL, string $name = NULL, bool $required = false, string $id = NULL, string $css = NULL, string $js = NULL): string
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
                <input type='time' class='form-control " . $css . "' name='" . $_name . "' id='" . $_id . "' placeholder='" . $placeholder . "' value='" . $value . "' " . $js . " " . $inputRequired . "/>
            </fieldset>
        ";

    return $out;
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


function dateField(string $placeholder = NULL, string $value = NULL, string $name = NULL,  bool $required = false, string $min = NULL, string $max = NULL, string $id = NULL, string $css = NULL, string $js = NULL): string
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

    if ($min) {
        $min = 'min="' . $min . '"';
    }

    if ($max) {
        $max = 'max="' . $max . '"';
    }

    if ($placeholder) {
        $label = "<label for='" . $_id . "' class='form-label'>" . $placeholder . $simb . "</label>";
    }

    $out = "
            <fieldset class='mb-1' id='js_" . $slug . "'>
                " . $label . "
                <input type='date' class='form-control " . $css . "' name='" . $_name . "' id='" . $_id . "' placeholder='" . $placeholder . "' " . $min . " " . $max . " value='" . $value . "' " . $js . " " . $inputRequired . "/>
            </fieldset>
        ";

    return $out;
}

function dateTimeField(string $placeholder = NULL, string $value = NULL, string $name = NULL,  bool $required = false, string $min = NULL, string $max = NULL, string $id = NULL, string $css = NULL, string $js = NULL): string
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

    if ($min) {
        $min = 'min="' . $min . '"';
    }

    if ($max) {
        $max = 'max="' . $max . '"';
    }

    if ($placeholder) {
        $label = "<label for='" . $_id . "' class='form-label'>" . $placeholder . $simb . "</label>";
    }

    $out = "
            <fieldset class='mb-1' id='js_" . $slug . "'>
                " . $label . "
                <input type='datetime-local' class='form-control " . $css . "' name='" . $_name . "' id='" . $_id . "' placeholder='" . $placeholder . "' " . $min . " " . $max . " value='" . $value . "' " . $js . " " . $inputRequired . "/>
            </fieldset>
        ";

    return $out;
}


function editorAreaField(string $placeholder = null, string $value = null, string $name = null, bool $required = false, string $id = null, string $css = null, string $js = null): string
{
    $slug = slug($placeholder);
    $name = $name ?? "f_$slug";
    $id = $id ?? "id_$slug";

    $simb = '';
    $inputRequired = '';
    if ($required) {
        $simb = '<span class="text-danger">*</span>';
        $inputRequired = 'required';
    }

    $label = '';
    if ($placeholder) {
        $label = "<label for='$id' class='form-label'>$placeholder$simb</label>";
    }

    $out = "
        <fieldset class='mb-1' id='js_$slug'>
            $label
            <div class='editor-field editor_$id $css' style='height: 400px' id='editor_$id' $js data-target='$id'>
                $value
            </div>
        </fieldset>
        <input type='hidden' name='$name' id='$id' value='$value' $inputRequired />
    ";

    return $out;
}
