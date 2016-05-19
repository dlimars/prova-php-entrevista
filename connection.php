<?php

$user = "root";
$pass = "root";
$host = "localhost";
$db   = "system_test";

try {

    $connection = new PDO("mysql:host={$host};dbname={$db}", $user, $pass);

    $users      = $connection->query('SELECT * from users');

    $users->setFetchMode(PDO::FETCH_INTO, new stdClass);

    foreach($users as $user) {

        echo sprintf("<li>ID %s - NAME: %s / EMAIL: %s</li>",
                        $user->id, $user->name, $user->email);

    }

    $con = null;

} catch (PDOException $e) {
    echo "Error!: " . $e->getMessage();
}