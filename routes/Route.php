<?php
foreach(glob(__DIR__.'/../app/controllers/*.php') as $file){
    require $file;
}


class Route{

    public function resources($request_uri, $request_uri_id, $request_verb){
        $helper = new Helper();

        if (strpos($request_uri, 'edit') !== false) {
            $edit = true;
        }

        if ($request_uri_id !== null){
            $request_uri = explode('/', $request_uri)[0];
        }
        $controller = ucfirst($request_uri.'Controller');

        $request_uri = $helper->check_controller($controller);

        switch ($request_verb){
            case 'GET':
                if ($request_uri_id !== null && !isset($edit)){
                    $acao = 'show';
                }elseif ($request_uri_id !== null && isset($edit)){
                    $acao = 'edit';
                }else{
                    $acao = 'index';
                }
                break;
            case 'POST':
                if (isset($edit)){
                    $acao = 'update';
                }else{
                    $acao = 'create';
                }
                break;
            case 'DELETE':
                $acao = 'delete';
                break;
        }
        call_user_func(array(new $controller, $acao),['id' => $request_uri_id, 'data' => $_POST]);
    }
}