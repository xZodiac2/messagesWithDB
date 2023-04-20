<?php

    $username = $_POST['name'];
    $message = $_POST['message'];

    $db = new mysqli('localhost', 'root', 'mysql', 'messages');
    $db->query("INSERT INTO `messages`(`userName`, `message`) VALUES ('$username', '$message')");
    $db->close();

    header("Location: /www/");
?>
