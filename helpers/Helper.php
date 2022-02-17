<?php

class Helper{
    public function get_uri($request_uri){
        $project_name = explode('/', $request_uri)[1];
        $request_uri = str_replace('/'.$project_name.'/', '',$request_uri);
        return $request_uri;
    }
    public function check_exists_id($request_uri){
        $id = explode('/', $request_uri);
        if (isset($id[1]) && $id[1] !== 'edit'){
            return $id[1];
        }elseif (isset($id[1]) && $id[1] === 'edit'){
            return $id[2];
        }
        else{
            return false;
        }
    }
    public function check_controller($controller){
        if (!class_exists($controller)){
            http_response_code(404);
            echo 'NotFound';
            exit();
        }
    }
}
