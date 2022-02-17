<?php
require __DIR__ . '/../models/User.php';


class UserController
{


    public function index()
    {
        try {
            $users = new User();
            $users = $users->getAll();

            $url =  "//{$_SERVER['HTTP_HOST']}{$_SERVER['REQUEST_URI']}";

            $loader = new \Twig\Loader\FilesystemLoader('resources/views');
            $twig = new \Twig\Environment($loader);
            $template = $twig->load('user.html');
            $parametros = array();
            $parametros['users'] = $users;
            $parametros['url'] = $url;
            $conteudo = $template->render($parametros);
            echo $conteudo;

        } catch (Exception $exception) {
            echo $exception->getMessage();
        }
    }
    public function show($request_uri_id)
    {
        try {
            $users = new User();
            $users = $users->getById($request_uri_id['id']);

            $url =  "//{$_SERVER['HTTP_HOST']}{$_SERVER['REQUEST_URI']}";

            $loader = new \Twig\Loader\FilesystemLoader('resources/views');
            $twig = new \Twig\Environment($loader);
            $template = $twig->load('user.html');
            $parametros = array();
            $parametros['users'] = $users;
            $parametros['url'] = $url;
            $conteudo = $template->render($parametros);
            echo $conteudo;

        } catch (Exception $exception) {
            echo $exception->getMessage();
        }
    }

    public function edit($request_uri_id)
    {
        try {
            $users = new User();
            $user = $users->getById($request_uri_id['id']);
            $user = $user->fetch();

            $loader = new \Twig\Loader\FilesystemLoader('resources/views');
            $twig = new \Twig\Environment($loader);
            $template = $twig->load('user_edit.html');
            $parametros = array();
            $parametros['user'] = $user;
            $conteudo = $template->render($parametros);
            echo $conteudo;

        } catch (Exception $exception) {
            echo $exception->getMessage();
        }
    }

    public function update($request)
    {
        $users = new User();
        $users->update($request['data']);
    }

    public function create()
    {
        echo 'creatororoorororo';
    }

    public function delete()
    {
        echo 'delitolololo';
    }
}