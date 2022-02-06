<?php

require 'Route.php';
require __DIR__.'/../helpers/Helper.php';

class Api {
    public function load_routes($request_uri, $request_verb){

        $helper = new Helper();
        $route = new Route();
        $request_uri = $helper->get_uri($request_uri);
        $request_uri_id = $helper->check_exists_id($request_uri);
        if ($request_uri_id !== false){
            $route->resources($request_uri , $request_uri_id , $request_verb);
        }else{
            $route->resources($request_uri ,null , $request_verb);
        }



    }
}



