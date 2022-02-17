<?php

require 'connection.php';

$connection = new Connection();

$users = $connection->query("SELECT * FROM users");


$users_insert = $connection->query("INSERT INTO users(name, email)
    VALUES
        ('paulo', 'foo@bar1'),
        ('maria', 'bar@baz2'),
        ('ana', 'baz@foo3')
");

var_dump($users_insert);




echo "<table border='1'>

    <tr>
        <th>ID</th>    
        <th>Nome</th>    
        <th>Email</th>
        <th>Ação</th>    
    </tr>
";

foreach($users as $user) {

var_dump($user);

    echo sprintf("<tr>
                      <td>%s</td>
                      <td>%s</td>
                      <td>%s</td>
                      <td>
                           <a href='#'>Editar</a>
                           <a href='#'>Excluir</a>
                      </td>
                   </tr>",
        $user->id, $user->name, $user->email);

}

echo "</table>";