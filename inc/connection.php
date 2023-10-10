<?php

/**
 * @package connection
 * @version 1.0.3
 * @author pedro-azeredo <pedro.azeredo93@gmail.com>
 */

$conn = new PDO("sqlite:./database/db.sqlite") or print($conn->errorInfo());
