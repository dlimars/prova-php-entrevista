<?php

require_once("./inc/common.php");
checkAccess();

$template = new Template();
$template->writeHtml();
