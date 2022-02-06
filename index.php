<?php

require 'connection.php';
require 'routes/Api.php';
require 'vendor/autoload.php';

$template = file_get_contents('resources/views/template/template.html');
echo $template;

$connection = new Connection();
$routes = new Api();
$request_uri = $_SERVER['REQUEST_URI'];
$request_verb = $_SERVER['REQUEST_METHOD'];
$routes->load_routes($request_uri, $request_verb);
