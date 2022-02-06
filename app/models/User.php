<?php

class User
{
    public $connection;

    public function __construct()
    {
        $this->connection = new Connection();
    }

    public function getAll()
    {
        $users = $this->connection->query("SELECT * FROM users");
        if (empty($users)) {
            http_response_code(404);
            echo 'NotFound';
            exit();
        }
        return $users;
    }

    public function getById($id)
    {
        $users = $this->connection->query("SELECT * FROM users WHERE id = $id");
        if (empty($users)) {
            http_response_code(404);
            echo 'NotFound';
            exit();
        }
        return $users;
    }

    public function update($data)
    {
        $name = $data['name'];
        $email = $data['email'];
        $id = $data['id'];
        $this->connection->query_run("UPDATE users SET name = $name, email = $email WHERE id = $id");
    }
}